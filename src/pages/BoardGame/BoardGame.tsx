import { useState } from "react"
import useWebSocket from "../../hooks/useWebSocket"
import type { GameState, Player } from "../../types/game"

const WS_URL = "ws://localhost:8080" // WebSocket server URL

function BoardGame() {
  const [gameState, setGameState] = useState<GameState | null>(null)
  const [player, setPlayer] = useState<Player>(null)

  const { sendMessage, isConnected } = useWebSocket(WS_URL, data => {
    if (data.type === "connected") {
      setPlayer(data.player as Player)
    } else if (data.type === "start" || data.type === "update") {
      setGameState(data.gameState as GameState)
    }
  })

  const DIRECTIONS = [
    [-1, -1],
    [-1, 0],
    [-1, 1], // Up-left, Up, Up-right
    [0, -1],
    [0, 1], // Left, Right
    [1, -1],
    [1, 0],
    [1, 1], // Down-left, Down, Down-right
  ]

  const isValidMove = (
    board: Array<Array<string | null>>,
    row: number,
    col: number,
    player: Player,
  ): boolean => {
    if (board[row][col] !== "") return false // Cell must be empty

    const opponent = player === "black" ? "white" : "black"
    let isValid = false

    for (const [dx, dy] of DIRECTIONS) {
      let x = row + dx
      let y = col + dy
      let hasOpponentBetween = false

      // Move in the current direction while staying within the board
      while (x >= 0 && x < 8 && y >= 0 && y < 8) {
        if (board[x][y] === opponent) {
          hasOpponentBetween = true
        } else if (board[x][y] === player) {
          if (hasOpponentBetween) isValid = true // Move is valid if enclosed by player's piece
          break
        } else {
          break // Empty cell, invalid move in this direction
        }
        x += dx
        y += dy
      }
    }

    return isValid
  }

  const makeMove = (row: number, col: number) => {
    if (!gameState || gameState.currentPlayer !== player) {
      console.log("Not your turn!")
      return
    }

    // if (!isValidMove(gameState.board, row, col, player)) {
    //   console.log("Invalid move!")
    //   return
    // }

    sendMessage({ type: "move", row, col, player })
  }

  return (
    <div>
      <h1>Othello WebSocket Game</h1>
      <p>WebSocket Status: {isConnected ? "Connected" : "Disconnected"}</p>
      <p>You are playing as: {player || "Waiting for opponent..."}</p>

      {gameState ? (
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(8, 40px)" }}
        >
          {gameState.board.flat().map((cell, index) => {
            const row = Math.floor(index / 8)
            const col = index % 8
            return (
              <div
                key={index}
                onClick={() => makeMove(row, col)}
                style={{
                  width: 40,
                  height: 40,
                  border: "1px solid black",
                  backgroundColor:
                    cell === "black"
                      ? "black"
                      : cell === "white"
                        ? "white"
                        : "green",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                {cell ? (cell === "black" ? "⚫" : "⚪") : ""}
              </div>
            )
          })}
        </div>
      ) : (
        <p>Waiting for another player...</p>
      )}
    </div>
  )
}

export default BoardGame
