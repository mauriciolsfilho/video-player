import { ReactNode } from "react";

export function PlayerWrapper({ children }: { children: ReactNode }) {
  return <div className="flex w-[1100px] flex-col gap-6">{children}</div>;
}
