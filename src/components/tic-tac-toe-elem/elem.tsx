import React from "react";
import './elem.css';

export function TicTacElem({value, id}: {value: number, id: number}) {
  return (
    <div className='tictakelem' id={id.toString()}>
      {value === 0 ? '' : value === 1 ? 'X' : 'O'}
    </div>
  );
}