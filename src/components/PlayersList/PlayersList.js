import React, { useContext } from "react";
import { Box } from "@chakra-ui/core";
import { WebSocketContext } from "../../websocket/WebSocket.context";
import Player from "../Player/Player";

const PlayersList = () => {
  const { players } = useContext(WebSocketContext);

  return (
    <Box
      width="25%"
      height="100%"
      d="flex"
      flexDirection="column"
      bg="teal.700"
      overflow="auto"
    >
      {players.map((player, i) => (
        <Player key={player.name + i} {...player} />
      ))}
    </Box>
  );
};

export default PlayersList;
