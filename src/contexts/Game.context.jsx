import React, { createContext, useReducer, useContext } from "react";
import boardJSON from "./gameBoard.json";
import { WebSocketContext } from "./WebSocket.context";
import * as events from "../constants/events";

export const GameContext = createContext(null);

const initalState = {
  board: boardJSON,
  selected: []
};
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

export const GameContextProvider = ({ children }) => {
  const { dispatch: socketDispatch } = useContext(WebSocketContext);
  const [state, gameDispatch] = useReducer(reducer, {
    ...initalState,
    socketDispatch
  });

  return (
    <GameContext.Provider value={{ ...state, dispatch: gameDispatch }}>
      {children}
    </GameContext.Provider>
  );
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case events.PLAYER_CLICK_ON_CELL:
      const newBoard = handleClickOnCell(state.board, payload);
      if (payload.cell.ball)
        return {
          ...state,
          board: newBoard,
          selected: [...state.selected, payload.cell]
        };
      return {
        ...state,
        board: newBoard,
        selected: []
      };

    default:
      return state;
  }
}

///////////////
// FUNCTIONS //
///////////////

function handleClickOnCell(state, payload) {
  const { board, selected } = state;
  // If it's a ball
  if (payload.cell.ball) {
    // Set selected on cell
    const selectedCell = { ...payload.cell, isSelected: true };
    // Set selectionnable on cell's around
    const cellRow = payload.cell.pos.split(":")[0];
    const num = payload.cell.pos.split(":")[1];

    const newBoard = Object.entries(board).map(([rowName, cells]) => {
      // In each row, check if cell is selectionnable or selected
      const newCells = cells.map(cell => {
        // If it's the selected
        if (cell.pos === selectedCell.pos) {
          cell = selectedCell;
          return cell;
        } else if (
          cell.pos === `${letters[letters.indexOf(cellRow) - 1]}:${num - 1}` || // If top-left
          cell.pos === `${letters[letters.indexOf(cellRow) - 1]}:${num}` || // If top-right
          cell.pos === `${cellRow}:${parseInt(num) + 1}` || // If right
          cell.pos ===
            `${letters[letters.indexOf(cellRow) + 1]}:${parseInt(num) + 1}` || // If bottom-right
          cell.pos === `${letters[letters.indexOf(cellRow) + 1]}:${num}` || // If bottom-left
          cell.pos === `${cellRow}:${num - 1}` // If left
        ) {
          cell.isSelectionnable = true;
          // Assign direction flag on emprty cells
          if (!cell.ball) {
            cell.direction =
              cell.pos === `${letters[letters.indexOf(cellRow) - 1]}:${num - 1}`
                ? "top_left"
                : cell.pos === `${letters[letters.indexOf(cellRow) - 1]}:${num}`
                ? "top_right"
                : cell.pos === `${cellRow}:${parseInt(num) + 1}`
                ? "right"
                : cell.pos ===
                  `${letters[letters.indexOf(cellRow) + 1]}:${
                    parseInt(num) + 1
                  }`
                ? "bottom_right"
                : cell.pos === `${letters[letters.indexOf(cellRow) + 1]}:${num}`
                ? "bottom_left"
                : cell.pos === `${cellRow}:${num - 1}`
                ? "left"
                : null;
          }
          console.log("dir", cell.direction);
          return cell;
        } else return cell;
      });
      return newCells;
    });
    return newBoard;
  } else {
    return board;
  }
}

function move(pos, direction) {
  let row = getRow(pos);
  let num = getNum(pos);

  switch (direction) {
    case "top_left":
      row = letters[letters.indexOf(row) - 1];
      num--;
      return `${row}:${num}`;

    case "top_right":
      row = letters[letters.indexOf(row) - 1];
      return `${row}:${num}`;

    case "right":
      num++;
      return `${row}:${num}`;

    case "bottom_right":
      row = letters[letters.indexOf(row) + 1];
      num++;
      return `${row}:${num}`;

    case "bottom_left":
      row = letters[letters.indexOf(row) + 1];
      return `${row}:${num}`;

    case "left":
      num--;
      return `${row}:${num}`;

    default:
      throw Error("Unknown direction for ball");
  }
}

function getRow(pos) {
  return pos.split(":")[0];
}

function getNum(pos) {
  return pos.split(":")[1];
}
