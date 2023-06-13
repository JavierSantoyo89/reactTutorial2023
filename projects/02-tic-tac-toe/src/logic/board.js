import { WINNER_COMBOS } from "../constants.js"
export const checkWinnerFrom = (boardToCheck) => {
  //* Revisa las conbinaciones si gano X u O
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a] //* regresa X o O
    }
  }
  //* no hay ganador
  return null
}

export const checkEndWinner = (newBoard) => {
  return newBoard.every((Square) => Square != null)
}
