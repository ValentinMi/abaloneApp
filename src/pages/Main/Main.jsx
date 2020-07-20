import React from "react";
import { Box } from "@chakra-ui/core";
import PlayersList from "../../components/PlayersList/PlayersList";
import GamesList from "../../components/GamesList/GamesList";
import Game from "../../components/Game/Game";
import { GameContextProvider } from "../../contexts/Game.context";

const Main = () => {
  return (
    <Box height="100vh" width="100%" d="flex" justifyContent="space-between">
      <PlayersList />
      <GameContextProvider>
        <Game />
      </GameContextProvider>
      <GamesList />
    </Box>
  );
};

export default Main;
