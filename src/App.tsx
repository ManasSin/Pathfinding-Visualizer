import { PathFinderProvider } from "./context/PathfinderContext";
import { TileProvider } from "./context/TileContext";

function App() {
  return (
    <PathFinderProvider>
      <TileProvider>
        <div className="">
          <h1 className="text-3xl font-bold underline h-screen w-screen bg-blue-500">
            hello world!
          </h1>
        </div>
      </TileProvider>
    </PathFinderProvider>
  );
}

export default App;
