export type Player = "black" | "white" | null

export interface GameState {
  board: Player[][]
  currentPlayer: Player
}
