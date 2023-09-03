import { MessageCircle } from "lucide-react";

interface PlayerHeaderProps {
  moduleTitle: string;
  lessonTitle: string;
}

export function PlayerHeader({ moduleTitle, lessonTitle }: PlayerHeaderProps) {
  return (
    <div className="flex w-full items-center px-4 justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{lessonTitle}</h1>
        <span className="text-sm text-zinc-400">{moduleTitle}</span>
      </div>
      <button className="flex items-center gap-2 rounded bg-green-800 px-3 py-2 text-sm font-medium text-white hover:bg-green-600">
        <MessageCircle className="w-4 h-4" />
        Feedback
      </button>
    </div>
  );
}
