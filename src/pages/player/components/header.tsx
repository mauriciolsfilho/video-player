import { MessageCircle } from "lucide-react";
export function PlayerHeader() {
  return (
    <div className="flex w-full items-center px-4 justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Online Course System</h1>
        <span className="text-sm text-zinc-400">
          {/* Módulo "Desvendando o Redux" */}
          Module: 'Learn React'
        </span>
      </div>
      <button className="flex items-center gap-2 rounded bg-green-800 px-3 py-2 text-sm font-medium text-white hover:bg-green-600">
        <MessageCircle className="w-4 h-4" />
        Feedback
      </button>
    </div>
  );
}
