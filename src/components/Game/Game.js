import React from "react";
import { Box, Text } from "@chakra-ui/core";

const Game = ({ playersNbr }) => {
  return (
    <Box d="flex">
      <Text>{playersNbr}/2</Text>
    </Box>
  );
};

export default Game;
