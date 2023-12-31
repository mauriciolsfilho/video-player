import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import { useAppSelector } from "../../../store";
import { useDispatch } from "react-redux";
import { play } from "../../../store/slices/player";
import { useEffect, useState } from "react";

interface ModuleProps {
  index: number;
  title: string;
  amountOfLessons: number;
}
export function Module(props: ModuleProps) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const lessons = useAppSelector(
    (state) => state.player.course.modules[props.index].lessons
  );

  const { currentLessonIndex, currentModuleIndex } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;
    return { currentLessonIndex, currentModuleIndex };
  });

  function handlePlayLesson(lessonIndex: number) {
    dispatch(play({ moduleIndex: props.index, lessonIndex }));
  }

  useEffect(() => {
    setOpen(currentModuleIndex === props.index);
  }, [currentModuleIndex]);

  return (
    <Collapsible.Root
      className="group"
      open={open}
      onOpenChange={(isOpen) => setOpen(isOpen)}
    >
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
              current={
                currentModuleIndex === props.index &&
                currentLessonIndex === lessonIndex
              }
              onPlay={() => handlePlayLesson(lessonIndex)}
            />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
