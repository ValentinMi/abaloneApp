import React from "react";
import { Box } from "@chakra-ui/core";

const Center = ({ children }) => {
  return (
    <Box d="flex" justifyContent="center" alignItems="item">
      {children}
    </Box>
  );
};

export default Center;
