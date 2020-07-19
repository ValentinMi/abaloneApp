import React, { useContext } from "react";
import { Avatar, Box } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import { WebSocketContext } from "../../websocket/WebSocket.context";

const Player = ({ name, isPlaying, game_id }) => {
  const { player } = useContext(WebSocketContext);

  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      borderWidth={player.name === name ? "2px" : 0}
      borderColor="green.500"
      borderStyle="solid"
      p={3}
    >
      <Avatar
        name="player avatar"
        src={`https://api.adorable.io/avatars/285/${name}.png`}
      />
      <Text color="white">{name}</Text>
      <Box
        height="10px"
        width="10px"
        borderRadius="50%"
        bg={isPlaying ? "green.500" : "red.500"}
      />
    </Box>
  );
};

export default Player;
