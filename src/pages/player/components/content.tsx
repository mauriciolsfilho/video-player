import ReactPlayer from "react-player";
import { Module } from "./module";
import { useAppSelector } from "../../../store";

export function PlayerContent() {
  const lesson = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    return state.player.course.modules[currentModuleIndex].lessons[
      currentLessonIndex
    ];
  });

  console.log(lesson);
  const modules = useAppSelector((state) => state.player.course.modules);
  return (
    <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
      <div className="flex-1">
        <div className="w-full bg-zinc-950 aspect-video">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://youtube.com/watch?v=${lesson.id}`}
          />
        </div>
      </div>
      <aside className="w-80 absolute top-0 bottom-0 right-0 divide-y-2 divide-zinc-900 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-700">
        {modules.map((module, index) => (
          <Module
            key={module.id}
            index={index}
            title={module.title}
            amountOfLessons={module.lessons.length}
          />
        ))}
      </aside>
    </main>
  );
}
