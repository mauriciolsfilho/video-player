import { useAppSelector } from "../../store";
import { Module } from "./components/Module";
import { PlayerHeader } from "./components/PlayerHeader";
import { Video } from "./components/Video";
import { PlayerWrapper } from "./components/PlayerWrapper";

export function Player() {
  const { lesson } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    return {
      lesson:
        state.player.course.modules[currentModuleIndex].lessons[
          currentLessonIndex
        ],
      currentLessonIndex,
      currentModuleIndex,
    };
  });

  const modules = useAppSelector((state) => state.player.course.modules);

  return (
    <div className="flex h-full w-full p-4 justify-center items-center">
      <PlayerWrapper>
        <PlayerHeader moduleTitle="ASDFASD" lessonTitle="ASDFAS" />
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video url={`https://youtube.com/watch?v=${lesson.id}`} />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 divide-y-2 divide-zinc-900 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-700">
            {modules.map((courseModule, index) => (
              <Module
                index={index}
                key={courseModule.id}
                title={courseModule.title}
                amountOfLessons={courseModule.lessons.length}
              />
            ))}
          </aside>
        </main>
      </PlayerWrapper>
    </div>
  );
}
