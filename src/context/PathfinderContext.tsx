import { ReactNode, createContext, useState } from "react";
import { AlgorithmTypes, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";

export interface PathfinderContextInterface {
  algorithms: AlgorithmTypes;
  setAlgorithm: (algorithm: AlgorithmTypes) => void;
  maze: MazeType;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathFindingContext = createContext<
  PathfinderContextInterface | undefined
>(undefined);

export const PathFinderProvider = ({ children }: { children: ReactNode }) => {
  const [algorithms, setAlgorithm] = useState<AlgorithmTypes>("BFS");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GridType>(
    createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  );
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);
  return (
    <PathFindingContext.Provider
      value={{
        algorithms,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </PathFindingContext.Provider>
  );
};
