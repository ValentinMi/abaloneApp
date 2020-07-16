import React, { useContext } from "react";
import { WebSocketContext } from "../../websocket/WebSocket.context";
import { Box } from "@chakra-ui/core";
import Game from "../Game/Game";

const GamesList = () => {
  const { games } = useContext(WebSocketContext);

  return (
    <Box
      width="20%"
      height="100%"
      d="flex"
      flexDirection="column"
      bg="teal.700"
      overflow="auto"
    >
      {games.map((game) => (
        <Game playersNbr={game.playersNbr} />
      ))}
    </Box>
  );
};

export default GamesList;
