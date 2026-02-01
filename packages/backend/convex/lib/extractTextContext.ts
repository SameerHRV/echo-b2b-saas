import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { assert } from "convex-helpers";
import type { StorageActionWriter } from "convex/server";
import { Id } from "../_generated/dataModel";

const AI_MODELS = {
  image: google.chat("gemini-2.5-flash"),
  pdf: google.chat("gemini-2.5-flash"),
  html: google.chat("gemini-2.5-flash"),
} as const;

const SUPPORT_IMAGE_TYPE = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
];

const SYSTEM_PROMPTS = {
  image:
    "You transform the image into text. If it is a photo of a document, transcribe it. If it is not a document, discribe it.",
  pdf: "You transform the PDF into text.",
  html: "You transform the HTML into text.",
};

export type ExtractTextContentArgs = {
  storageId: Id<"_storage">;
  filename: string;
  mimeType: string;
  bytes?: ArrayBuffer;
};

export async function extractTextContent(
  ctx: { storage: StorageActionWriter },
  args: ExtractTextContentArgs,
): Promise<string> {
  const { storageId, filename, mimeType, bytes } = args;

  const url = await ctx.storage.getUrl(storageId);
  assert(url, "Storage URL not found");

  if (SUPPORT_IMAGE_TYPE.some((type) => type === mimeType)) {
    return extractImageText(url);
  }

  if (mimeType.toLowerCase().includes("pdf")) {
    return extractPdfText(url, filename, mimeType);
  }

  if (mimeType.toLowerCase().includes("text")) {
    return extractTextFileContent(ctx, url, mimeType, storageId, bytes);
  }

  throw new Error(`Unsupported file type: ${mimeType}`);
}

async function extractImageText(url: string): Promise<string> {
  const result = await generateText({
    model: AI_MODELS.image,
    system: SYSTEM_PROMPTS.image,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            image: new URL(url),
          },
        ],
      },
    ],
  });

  return result.text;
}

async function extractPdfText(
  url: string,
  filename: string,
  mimeType: string,
): Promise<string> {
  const result = await generateText({
    model: AI_MODELS.pdf,
    system: SYSTEM_PROMPTS.pdf,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "file",
            data: new URL(url),
            mediaType: mimeType,
            filename,
          },
          {
            type: "text",
            text: "Extract the text from the PDF and print it without any additional information.",
          },
        ],
      },
    ],
  });

  return result.text;
}

async function extractTextFileContent(
  ctx: { storage: StorageActionWriter },
  url: string,
  mimeType: string,
  storageId: Id<"_storage">,
  bytes?: ArrayBuffer | undefined,
): Promise<string> {
  const arrayBuffer =
    bytes || (await (await ctx.storage.get(storageId))?.arrayBuffer());

  if (!arrayBuffer) {
    throw new Error("Failed to extract text from file");
  }

  const text = new TextDecoder().decode(arrayBuffer);

  if (mimeType.toLowerCase() !== "text/plain") {
    const result = await generateText({
      model: AI_MODELS.html,
      system: SYSTEM_PROMPTS.html,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text,
            },
            {
              type: "text",
              text: "Extract the text from the file and print it without any additional information.",
            },
          ],
        },
      ],
    });

    return result.text;
  }

  return text;
}
