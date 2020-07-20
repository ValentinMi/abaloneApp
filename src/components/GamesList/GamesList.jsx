import React, { useContext } from "react";
import { WebSocketContext } from "../../contexts/WebSocket.context";
import { Box } from "@chakra-ui/core";
import GameCard from "../GameCard/GameCard";
import GamesListForm from "./GamesListForm/GamesListForm";

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
      <GamesListForm />
      {games.map(game => (
        <GameCard key={game._id} game={game} />
      ))}
    </Box>
  );
};

export default GamesList;
