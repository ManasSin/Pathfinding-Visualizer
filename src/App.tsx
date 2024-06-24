import { PathFinderProvider } from "./context/PathfinderContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

function App() {
  return (
    <PathFinderProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="">
            <h1 className="text-3xl font-bold underline h-screen w-screen bg-blue-500">
              hello world!
            </h1>
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathFinderProvider>
  );
}

export default App;
