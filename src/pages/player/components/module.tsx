import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { Lesson } from "./lesson";
import { useAppSelector } from "../../../store";
import { useDispatch } from "react-redux";
import { play } from "../../../store/slices/player";

interface ModuleProps {
  index: number;
  title: string;
  amountOfLessons: number;
}
export function Module(props: ModuleProps) {
  const dispatch = useDispatch();
  const lessons = useAppSelector(
    (state) => state.player.course.modules[props.index].lessons
  );

  function handlePlayLesson(lessonIndex: number) {
    dispatch(play({ moduleIndex: props.index, lessonIndex }));
  }

  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 rounded bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {props.index + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm"> {props.title} </strong>
          <span className="text-xs text-zinc-400">
            {props.amountOfLessons > 1
              ? `${props.amountOfLessons} aulas`
              : `${props.amountOfLessons} aula`}
          </span>
        </div>
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map(({ id, title, duration }, lessonIndex) => (
            <Lesson
              key={id}
              title={title}
              duration={duration}
              onPlay={() => handlePlayLesson(lessonIndex)}
            />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
