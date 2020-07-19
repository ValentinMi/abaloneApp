import React, { useContext } from "react";
import { Box, Text, Button } from "@chakra-ui/core";
import { WebSocketContext } from "../../websocket/WebSocket.context";
import * as events from "../../constants/events";

const GameCard = ({ game }) => {
  const { dispatch, currentGame } = useContext(WebSocketContext);
  const { _id, creator, playersNbr } = game;

  const handleJoin = () => {
    dispatch({
      type: events.USER_JOIN_GAME,
      payload: { game_id: _id }
    });
  };

  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="white"
      borderWidth="1px"
      shadow="md"
      p={2}
      m={2}
    >
      <Box d="flex" flexDirection="column">
        <Text>Created by: {creator.name}</Text>
        <Text>Players: {playersNbr}/2</Text>
      </Box>
      <Box>
        {/* Don"t display join btn if we already are in the game */}
        {currentGame !== _id && playersNbr < 2 && (
          <Button onClick={handleJoin} variantColor="green">
            Join
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default GameCard;
