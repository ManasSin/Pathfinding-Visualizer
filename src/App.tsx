import { PathFinderProvider } from "./context/PathfinderContext";

function App() {
  return (
    <PathFinderProvider>
      <div className="">
        <h1 className="text-3xl font-bold underline h-screen w-screen bg-blue-500">
          hello world!
        </h1>
      </div>
    </PathFinderProvider>
  );
}

export default App;
