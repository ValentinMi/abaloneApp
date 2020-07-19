import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { WebSocketContext } from "../../websocket/WebSocket.context";
import * as events from "../../constants/events";

import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/core";

const Login = () => {
  const { dispatch } = useContext(WebSocketContext);
  const history = useHistory();

  const [form, setForm] = useState({ nickName: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleConnect = e => {
    e.preventDefault();

    dispatch({
      type: events.CONNECT,
      payload: { name: form.nickName }
    });

    history.push("/main");
  };

  return (
    <Box
      width="100%"
      height="50vh"
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize="6xl">Abalone</Text>
      <Box shadow="md" borderWidth="1px" p={3}>
        <form onSubmit={e => handleConnect(e)}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Choose a nickname</FormLabel>
            <Input
              type="text"
              id="nickName"
              onChange={handleChange}
              value={form.nickName}
              width=""
            />
          </FormControl>
          <Button mt={4} variantColor="teal" type="submit">
            Connect
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
