import { BinaryTree } from "../../lib/algorithm/maze/BinaryTree";
import { GridType, MazeType, SpeedType, TileType } from "../types";

type RunMazeAlgoType = {
  maze: MazeType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: SpeedType;
};

export const runMazeAlgorithm = async ({
  grid,
  startTile,
  endTile,
  maze,
  setIsDisabled,
  speed,
}: RunMazeAlgoType) => {
  if (maze === "BINARY_TREE") {
    await BinaryTree(grid, startTile, endTile, setIsDisabled, speed);
  }
};
