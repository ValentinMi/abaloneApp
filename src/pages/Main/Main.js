import React, { useContext } from "react";
import { WebSocketContext } from "../../websocket/WebSocket.context";
import { Box } from "@chakra-ui/core";
import PlayersList from "../../components/PlayersList/PlayersList";
import GamesList from "../../components/GamesList/GamesList";

const Main = () => {
  const { players, games, playerName } = useContext(WebSocketContext);

  return (
    <Box height="100vh" width="100%" d="flex" justifyContent="space-between">
      <PlayersList />
      <GamesList />
    </Box>
  );
};

export default Main;
