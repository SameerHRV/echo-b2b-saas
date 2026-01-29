import Vapi from "@vapi-ai/web";
import { useEffect, useState } from "react";

interface TranscriptMessage {
  role: "user" | "assistant";
  text: string;
}

export const useVapi = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);

  useEffect(() => {
    // Only for the Testing the Vapi APi, Otherwise costomer bring there own Vapi Instance Or Api Key
    const vapiInstance = new Vapi("4923a07a-10c4-4b8e-880d-6cad03b01403");
    setVapi(vapiInstance);

    vapiInstance.on("call-start", () => {
      setIsConnecting(true);
      setIsConnected(true);
      setTranscript([]);
    });

    vapiInstance.on("call-end", () => {
      setIsConnecting(false);
      setIsConnected(false);
      setIsSpeaking(false);
    });
    vapiInstance.on("speech-start", () => {
      setIsSpeaking(true);
    });
    vapiInstance.on("speech-end", () => {
      setIsSpeaking(false);
    });
    vapiInstance.on("error", (error) => {
      console.log(error, "vapi error");
      setIsConnecting(false);
      setIsConnected(false);
      setIsSpeaking(false);
    });

    vapiInstance.on("message", (data) => {
      if (data.type === "transcript" && data.transcriptType === "final") {
        setTranscript((prev) => [
          ...prev,
          {
            role: data.role === "user" ? "user" : "assistant",
            text: data.transcript,
          },
        ]);
      }
    });

    return () => {
      vapiInstance?.stop();
    };
  }, []);

  const startCall = () => {
    setIsConnecting(true);

    if (vapi) {
      // Only for the Testing the Vapi APi, Otherwise costomer bring there own Vapi  Instance Or Api Key
      vapi.start("e5cefb91-5880-4f67-bc85-1421b7756cd2");
    }
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return {
    isSpeaking,
    isConnected,
    isConnecting,
    transcript,
    startCall,
    endCall,
  };
};
