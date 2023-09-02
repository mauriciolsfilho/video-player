import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { Player } from "./pages/player";

export function App() {
  return (
    <ReduxProvider store={store}>
      <main className="flex h-screen text-zinc-100 bg-zinc-950 w-screen">
        <Player />
      </main>
    </ReduxProvider>
  );
}
