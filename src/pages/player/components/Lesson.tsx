import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  current?: boolean;
  onPlay: () => void;
}

export function Lesson({
  title,
  duration,
  onPlay,
  current = false,
}: LessonProps) {
  return (
    <button
      onClick={onPlay}
      data-active={current}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-blue-400"
    >
      {current ? (
        <PlayCircle className="w-5 h-5 text-blue-400" />
      ) : (
        <Video className="w-5 h-5 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-sm text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
