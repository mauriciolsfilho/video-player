import ReactPlayer from "react-player";

export function Video({ url }: { url: string }) {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer width="100%" height="100%" controls url={url} />
    </div>
  );
}
