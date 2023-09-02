import { PlayerContent } from "./components/content";
import { PlayerHeader } from "./components/header";
import { PlayerWrapper } from "./components/wrapper";

export function Player() {
  return (
    <div className="flex h-full w-full p-4 justify-center items-center">
      <PlayerWrapper>
        <PlayerHeader />
        <PlayerContent />
      </PlayerWrapper>
    </div>
  );
}
