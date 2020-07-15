import React, { useContext } from "react";
import { WebSocketContext } from "../../websocket/WebSocket.context";
import { Box } from "@chakra-ui/core";
import PlayersList from "../../components/PlayersList/PlayersList";

const Main = () => {
  const { players, games, playerName } = useContext(WebSocketContext);

  return (
    <Box height="100vh" width="100%" d="flex" justifyContent="space-between">
      <PlayersList />
    </Box>
  );
};

export default Main;
