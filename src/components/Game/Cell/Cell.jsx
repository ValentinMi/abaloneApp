import React from "react";
import { Box } from "@chakra-ui/core";

const Cell = ({ infos }) => {
  const { pos, ball } = infos;
  console.log(infos);
  return (
    <Box
      height="60px"
      width="60px"
      borderStyle="dotted"
      borderWidth="1px"
      borderColor="black"
      bg={ball ? ball.color : "gray.400"}
      borderRadius="50%"
      mx={1}
    ></Box>
  );
};

export default Cell;
