import { twMerge } from "tailwind-merge";
import { usePathFinding } from "../hooks/usePathFinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import Tile from "./Tile";

type Props = {};

export function Grid({}: Props) {
  const { grid } = usePathFinding();
  return (
    <div
      className={twMerge(
        //base classes
        "flex flex-col items-center justify-center border-sky-300",
        // Control Grid Height
        `lg:min-h-[${MAX_ROWS * 1}rem] md:min-h-[${
          MAX_ROWS * 0.9
        }rem] sm:min-h-[${MAX_ROWS * 0.5}rem] min-h-[${MAX_ROWS * 0.4}rem]`,
        // Controlling grid width
        `lg:min-h-[${MAX_COLS * 1}rem] md:min-h-[${
          MAX_COLS * 0.9
        }rem] sm:min-h-[${MAX_COLS * 0.5}rem] min-h-[${MAX_COLS * 0.4}rem]`
      )}
    >
      {grid.map((row, rowIndex) => (
        <div className="flex" key={rowIndex}>
          {row.map((tile, titleIndex) => {
            const { isEnd, isStart, isPath, isTraversed, isWall } = tile;
            return (
              <Tile
                key={titleIndex}
                row={tile.row}
                col={tile.col}
                isEnd={isEnd}
                isStart={isStart}
                isPath={isPath}
                isTraversed={isTraversed}
                isWall={isWall}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
