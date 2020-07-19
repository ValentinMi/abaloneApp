import React, { useState, useCallback, useEffect } from "react";
import boardJSON from "./gameBoard.json";
import { Box } from "@chakra-ui/core";
import Cell from "./Cell/Cell";

const Game = () => {
  const [board, setBoard] = useState(boardJSON);

  const treatBoard = useCallback(() => {
    console.log(boardJSON);
  }, []);

  useEffect(() => {
    treatBoard();
  }, [treatBoard]);

  return (
    <Box
      d="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      bg="green.400"
    >
      {Object.entries(board).map(([rowName, cells]) => (
        <Box key={rowName} d="flex" m={0}>
          {cells.map(cell => (
            <Cell key={cell.pos} infos={cell} />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Game;
