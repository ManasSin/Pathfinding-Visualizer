import { twMerge } from "tailwind-merge";
import {
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../utils/constants";

interface MouseFunction {
  (row: number, col: number): void;
}

type Props = {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isTraversed: boolean;
  isWall: boolean;
  isPath: boolean;
  handleMouseDown: MouseFunction;
  handleMouseUp: MouseFunction;
  handleMouseEnter: MouseFunction;
};

const Tile = ({
  row,
  col,
  isEnd,
  isPath,
  isStart,
  isTraversed,
  isWall,
  handleMouseDown,
  handleMouseEnter,
  handleMouseUp,
}: Props) => {
  let tileTypeStyle: string;

  if (isStart) {
    tileTypeStyle = START_TILE_STYLE;
  } else if (isEnd) {
    tileTypeStyle = END_TILE_STYLE;
  } else if (isWall) {
    tileTypeStyle = WALL_TILE_STYLE;
  } else if (isPath) {
    tileTypeStyle = PATH_TILE_STYLE;
  } else if (isTraversed) {
    tileTypeStyle = TRAVERSED_TILE_STYLE;
  } else {
    tileTypeStyle = TILE_STYLE;
  }

  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";

  const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

  return (
    <div
      className={twMerge(tileTypeStyle, borderStyle, edgeStyle)}
      id={`${row}-${col}`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseUp={() => handleMouseUp(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
    />
  );
};

export default Tile;
