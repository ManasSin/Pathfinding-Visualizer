import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathFinderProvider } from "./context/PathfinderContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathFinderProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathFinderProvider>
  );
}

export default App;
