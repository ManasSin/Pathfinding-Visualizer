import { twMerge } from "tailwind-merge";
import { usePathFinding } from "../hooks/usePathFinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import Tile from "./Tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

type Props = {
  isVisualizationRunningRef: MutableRefObject<boolean>;
};

export function Grid({ isVisualizationRunningRef }: Props) {
  const { grid, setGrid } = usePathFinding();
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    setIsMouseDown(true);
    const newGrid = createNewGrid(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    setIsMouseDown(false);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    if (isMouseDown) {
      const newGrid = createNewGrid(grid, row, col);
      setGrid(newGrid);
    }
  };

  return (
    <div
      className={twMerge(
        //base classes
        "flex flex-col items-center justify-center border-sky-300 mt-10",
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
      {grid.map((r, rowIndex) => (
        <div className="flex" key={rowIndex}>
          {r.map((tile, titleIndex) => {
            const { row, col, isEnd, isStart, isPath, isTraversed, isWall } =
              tile;
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
                handleMouseDown={() => handleMouseDown(row, col)}
                handleMouseUp={() => handleMouseUp(row, col)}
                handleMouseEnter={() => handleMouseEnter(row, col)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
