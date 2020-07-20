import React, { useState, useContext } from "react";
import { Box, Button, FormControl, Input } from "@chakra-ui/core";
import { WebSocketContext } from "../../../contexts/WebSocket.context";
import * as events from "../../../constants/events";

const GamesListForm = () => {
  const { dispatch } = useContext(WebSocketContext);

  const [inputIsVisible, setInputIsVisible] = useState(false);
  const [, setInputValue] = useState("");

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleCreateGame = () => {
    dispatch({
      type: events.CREATE_GAME
    });
  };

  return (
    <Box>
      <Box d="flex" justifyContent="space-around" alignItems="center" p={2}>
        <Button onClick={handleCreateGame}>Create game</Button>
        <Button onClick={() => setInputIsVisible(v => !v)}>Join game</Button>
      </Box>
      {inputIsVisible && (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Input type="text" onChange={handleChange} />
          </FormControl>
        </form>
      )}
    </Box>
  );
};

export default GamesListForm;
