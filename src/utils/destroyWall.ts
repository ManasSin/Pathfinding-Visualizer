import { SPEEDS, TILE_STYLE } from "./constants";
import { sleep } from "./helpers";
import { GridType, SpeedType } from "./types";

const updateWallIfFalse = async (
  grid: GridType,
  row: number,
  col: number,
  speed: SpeedType
) => {
  grid[row][col].isWall = false;
  document.getElementById(`${row}-${col}`)!.className = TILE_STYLE;
  await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
};

export const destroyWall = async (
  grid: GridType,
  row: number,
  col: number,
  isRight: number,
  speed: SpeedType
) => {
  if (isRight && grid[row][col + 1]) {
    updateWallIfFalse(grid, row, (col = col + 1), speed);
  } else if (grid[row + 1][col]) {
    updateWallIfFalse(grid, (row = row + 1), col, speed);
  } else {
    updateWallIfFalse(grid, row, col, speed);
  }
};
