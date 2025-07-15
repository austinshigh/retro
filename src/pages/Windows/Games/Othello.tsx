import { useEffect, useState } from "react"
import styled from "styled-components"

type CellValue = "black" | "white" | null
type Board = CellValue[][]
type Player = "black" | "white"

const Othello = () => {
  const [board, setBoard] = useState<Board>(Array(8).fill(null).map(() => Array(8).fill(null)))
  const [currentPlayer, setCurrentPlayer] = useState<Player>("black")
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState<Player | null>(null)
  const [validMoves, setValidMoves] = useState<{ row: number; col: number }[]>([])
  const [lastPassed, setLastPassed] = useState<Player | null>(null)

  // Initialize the board with starting positions
  useEffect(() => {
    const initialBoard: Board = Array(8).fill(null).map(() => Array(8).fill(null))
    // Place initial pieces
    initialBoard[3][3] = "white"
    initialBoard[3][4] = "black"
    initialBoard[4][3] = "black"
    initialBoard[4][4] = "white"
    setBoard(initialBoard)
    updateValidMoves(initialBoard, "black")
  }, [])

  // Function to check if a move is valid
  const isValidMove = (board: Board, row: number, col: number, player: Player): boolean => {
    if (board[row][col] !== null) return false // Cell is already occupied

    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ]

    for (const [dx, dy] of directions) {
      let x = row + dx
      let y = col + dy
      let foundOpponent = false

      while (
        x >= 0 && x < 8 &&
        y >= 0 && y < 8
      ) {
        if (board[x][y] === null) break
        if (board[x][y] === player) {
          if (foundOpponent) return true
          break
        }
        foundOpponent = true
        x += dx
        y += dy
      }
    }

    return false
  }

  // Function to find all valid moves for the current player
  const updateValidMoves = (board: Board, player: Player) => {
    const moves: { row: number; col: number }[] = []
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (isValidMove(board, row, col, player)) {
          moves.push({ row, col })
        }
      }
    }
    setValidMoves(moves)
  }

  // Function to make a move and flip pieces
  const makeMove = (row: number, col: number) => {
    if (!isValidMove(board, row, col, currentPlayer)) return

    const newBoard = board.map(row => [...row])
    newBoard[row][col] = currentPlayer

    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ]

    let piecesFlipped = false

    for (const [dx, dy] of directions) {
      let x = row + dx
      let y = col + dy
      const piecesToFlip: { row: number; col: number }[] = []

      while (
        x >= 0 && x < 8 &&
        y >= 0 && y < 8 &&
        newBoard[x][y] !== null &&
        newBoard[x][y] !== currentPlayer
      ) {
        piecesToFlip.push({ row: x, col: y })
        x += dx
        y += dy
      }

      if (
        x >= 0 && x < 8 &&
        y >= 0 && y < 8 &&
        newBoard[x][y] === currentPlayer &&
        piecesToFlip.length > 0
      ) {
        piecesToFlip.forEach(({ row, col }) => {
          newBoard[row][col] = currentPlayer
        })
        piecesFlipped = true
      }
    }

    // Only update the board if we actually flipped some pieces
    if (piecesFlipped) {
      setBoard(newBoard)
      const nextPlayer = currentPlayer === "black" ? "white" : "black"
      setCurrentPlayer(nextPlayer)
      updateValidMoves(newBoard, nextPlayer)

      // Check if game is over
      const hasValidMoves = newBoard.some((row, i) =>
        row.some((_, j) => isValidMove(newBoard, i, j, nextPlayer))
      )

      if (!hasValidMoves) {
        const blackCount = newBoard.flat().filter(cell => cell === "black").length
        const whiteCount = newBoard.flat().filter(cell => cell === "white").length
        
        setGameOver(true)
        if (blackCount > whiteCount) {
          setWinner("black")
        } else if (whiteCount > blackCount) {
          setWinner("white")
        }
      }
    }
  }

  // Function to handle passing a turn
  const handlePass = () => {
    if (validMoves.length === 0) {
      const nextPlayer = currentPlayer === "black" ? "white" : "black"
      setCurrentPlayer(nextPlayer)
      updateValidMoves(board, nextPlayer)
      setLastPassed(currentPlayer)

      // Check if both players passed (game over)
      if (lastPassed === nextPlayer) {
        const blackCount = board.flat().filter(cell => cell === "black").length
        const whiteCount = board.flat().filter(cell => cell === "white").length
        
        setGameOver(true)
        if (blackCount > whiteCount) {
          setWinner("black")
        } else if (whiteCount > blackCount) {
          setWinner("white")
        }
      }
    }
  }

  const resetGame = () => {
    const initialBoard: Board = Array(8).fill(null).map(() => Array(8).fill(null))
    initialBoard[3][3] = "white"
    initialBoard[3][4] = "black"
    initialBoard[4][3] = "black"
    initialBoard[4][4] = "white"
    setBoard(initialBoard)
    setCurrentPlayer("black")
    setGameOver(false)
    setWinner(null)
    setLastPassed(null)
    updateValidMoves(initialBoard, "black")
  }

  return (
    <Container>
      <Title>Othello</Title>
      <BoardContainer>
        {board.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((cell, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                onClick={() => makeMove(rowIndex, colIndex)}
                isValidMove={validMoves.some(move => move.row === rowIndex && move.col === colIndex)}
              >
                {cell && <Piece color={cell} />}
              </Cell>
            ))}
          </Row>
        ))}
      </BoardContainer>
      <Status>
        Current Player: {currentPlayer}
        <div>Valid moves: {validMoves.length}</div>
        <div>Game over: {gameOver ? 'Yes' : 'No'}</div>
        {validMoves.length === 0 && !gameOver && (
          <PassButton onClick={handlePass}>Pass Turn</PassButton>
        )}
        {gameOver && (
          <GameOver>
            Game Over! {winner ? `Winner: ${winner}` : "It's a tie!"}
          </GameOver>
        )}
      </Status>
      <ResetButton onClick={resetGame}>Reset Game</ResetButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const Title = styled.h2`
  font-family: "VT323", monospace;
  font-size: 24px;
  margin-bottom: 20px;
`

const BoardContainer = styled.div`
  background-color: #1a472a;
  padding: 10px;
  border-radius: 5px;
`

const Row = styled.div`
  display: flex;
`

const Cell = styled.div<{ isValidMove: boolean }>`
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.isValidMove ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  
  &:hover {
    background-color: ${props => props.isValidMove ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  }
`

const Piece = styled.div<{ color: "black" | "white" }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

const Status = styled.div`
  margin-top: 20px;
  font-family: "VT323", monospace;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const GameOver = styled.div`
  margin-top: 10px;
  font-weight: bold;
  color: #ff4444;
`

const ResetButton = styled.button`
  margin-top: 20px;
  padding: 8px 16px;
  font-family: "VT323", monospace;
  font-size: 18px;
  background-color: #4a4a4a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #666;
  }
`

const PassButton = styled.button`
  padding: 8px 16px;
  font-family: "VT323", monospace;
  font-size: 18px;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff6666;
  }
`

export default Othello 