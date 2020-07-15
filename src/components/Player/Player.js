import React from "react";
import { Avatar, Box } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";

const Player = ({ name, isPlaying, game_id }) => {
  return (
    <Box d="flex" alignItems="center" justifyContent="space-between" p={3}>
      <Avatar
        name="player avatar"
        src={`https://api.adorable.io/avatars/285/${name}.png`}
      />
      <Text>{name}</Text>
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
