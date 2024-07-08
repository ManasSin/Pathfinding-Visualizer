import { BinaryTree } from "../../lib/algorithm/maze/BinaryTree";
import recursiveDivision from "../../lib/algorithm/maze/RecursiveDivision";
import { MAX_COLS, MAX_ROWS, SPEEDS } from "../constants";
import { constructBorders } from "../constructBorder";
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
  } else if (maze === "RECURSIVE_DIVISION") {
    const currentSpeed = SPEEDS.find((s) => s.value === speed)!.value ?? 2;
    await constructBorders(grid, startTile, endTile);
    await recursiveDivision({
      grid,
      startTile,
      endTile,
      row: 1,
      col: 1,
      height: Math.floor((MAX_ROWS - 1) / 2),
      width: Math.floor((MAX_COLS - 1) / 2),
      setIsDisabled,
      speed,
    });
    setTimeout(() => {
      setIsDisabled(false);
    }, 800 * currentSpeed);
  }
};
