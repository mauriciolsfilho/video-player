import ReactPlayer, { ReactPlayerProps } from "react-player";

export function Video({ url, ...props }: ReactPlayerProps) {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer {...props} width="100%" height="100%" controls url={url} />
    </div>
  );
}
