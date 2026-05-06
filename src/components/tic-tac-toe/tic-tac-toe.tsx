import React from "react";
import { TicTacElem } from "../tic-tac-toe-elem/elem";
import './tic-tac-toe.css';

const initialState = [{id: 1, value: 0}, {id: 2, value: 0}, {id: 3, value: 0}, {id: 4, value: 0}, {id: 5, value: 0}, {id: 6, value: 0}, {id: 7, value: 0}, {id: 8, value: 0}, {id: 9, value: 0}];

export function TicTacToe() {
  const [state, setState] = React.useState(initialState);
  const [isFirstPlayer, setPlayer] = React.useState<boolean>(true);
  const [isEndGame, setEndGame] = React.useState<boolean>(true);

  function resetState() {
    setState(initialState);
    setPlayer(true);
  }

  function handleClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement
    if (target.className.includes('tictakelem') && state[Number(target.id) - 1].value === 0) {

      const index = Number(target.id) - 1;

      setState([...state.slice(0, index), {id: Number(target.id), value: Number(isFirstPlayer) + 1}, ...state.slice(index + 1)])
      setPlayer((value) => !value)
    }
  }

  function checkFinalResult() {
    
  }

  return (
    <div onClick={handleClick}>
      <h1>Tic Tac Toe</h1>
      <div className="container">
        {state.map((cell) => (
          <TicTacElem key={cell.id} value={cell.value} id={cell.id} />
        ))}
        <button onClick={resetState}>Reset</button>
        {isEndGame && <div>This is the end game</div>}
      </div>
    </div>
  );
}