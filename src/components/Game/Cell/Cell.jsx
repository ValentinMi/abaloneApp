import React, { useState, useCallback, useContext } from "react";
import { Box } from "@chakra-ui/core";
import { GameContext } from "../../../contexts/Game.context";
import * as events from "../../../constants/events";

const Cell = ({ infos }) => {
  const { dispatch } = useContext(GameContext);
  const [isHovered, setIsHovered] = useState(false);

  const { pos, ball, isSelectionnable, isSelected } = infos;

  const handleHover = useCallback(() => {
    if (isSelectionnable) {
      setIsHovered(b => !b);
    }
  }, [isSelectionnable]);

  const handleClick = () => {
    if (infos.isSelectionnable) {
      dispatch({
        type: events.PLAYER_CLICK_ON_CELL,
        payload: {
          cell: infos
        }
      });
    }
  };

  return (
    <Box
      height="60px"
      width="60px"
      borderStyle="solid"
      borderWidth={
        (isSelectionnable && isHovered) || isSelected ? "3px" : "1px"
      }
      borderColor={
        (isSelectionnable && isHovered) || isSelected ? "blue.400" : "black"
      }
      bg={ball ? ball.color : "gray.400"}
      borderRadius="50%"
      mx={1}
      boxSizing="border-box"
      onMouseEnter={handleHover}
      onMouseOut={handleHover}
      onClick={handleClick}
    />
  );
};

export default Cell;
