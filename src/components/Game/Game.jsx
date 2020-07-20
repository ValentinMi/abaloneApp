import React, { useState, useCallback, useEffect, useContext } from "react";
import { Box } from "@chakra-ui/core";
import Cell from "./Cell/Cell";
import { GameContext } from "../../contexts/Game.context";

const Game = () => {
  const { board } = useContext(GameContext);
  console.log(board);

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
