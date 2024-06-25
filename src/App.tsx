import { Grid } from "./components/Grid";
import { PathFinderProvider } from "./context/PathfinderContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

function App() {
  return (
    <PathFinderProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Grid />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathFinderProvider>
  );
}

export default App;
