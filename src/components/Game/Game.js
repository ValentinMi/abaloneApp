import React from "react";
import { Box, Text, Button } from "@chakra-ui/core";

const Game = ({ game }) => {
  const { _id, creator, playersNbr } = game;
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
        <Button variantColor="green">Join</Button>
      </Box>
    </Box>
  );
};

export default Game;
