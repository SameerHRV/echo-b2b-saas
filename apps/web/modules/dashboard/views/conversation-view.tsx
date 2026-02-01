import Image from "next/image";

export const ConversationsView = () => {
  return (
    <div className="h-full flex flex-col flex-1 gap-y-4 bg-muted">
      <div className="flex flex-1 items-center justify-center gap-x-2">
        <Image alt="logo" height={40} width={40} src="/logo.svg" />
        <p className="font-semibold text-lg">Echo</p>
      </div>
    </div>
  );
};
