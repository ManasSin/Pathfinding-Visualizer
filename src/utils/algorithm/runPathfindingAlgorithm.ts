import { aStar } from "../../lib/algorithm/pathfinding/aStar";
import { bfs } from "../../lib/algorithm/pathfinding/bfs";
import { dfs } from "../../lib/algorithm/pathfinding/dfs";
import { dijkstra } from "../../lib/algorithm/pathfinding/dijkstra";
import { AlgorithmTypes, GridType, TileType } from "../types";

export const runPathfindingAlgorithm = ({
  algorithms,
  grid,
  startTile,
  endTile,
}: {
  algorithms: AlgorithmTypes;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}) => {
  switch (algorithms) {
    case "BFS":
      return bfs(grid, startTile, endTile);
    case "DFS":
      return dfs(grid, startTile, endTile);
    case "DIJKSTRA":
      return dijkstra(grid, startTile, endTile);
    case "A_STAR":
      return aStar(grid, startTile, endTile);
    default:
      return;
  }
};
