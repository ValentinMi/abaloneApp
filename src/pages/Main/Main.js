import React, { useContext } from "react";
import { WebSocketContext } from "../../websocket/WebSocket.context";

const Main = () => {
  const { ws } = useContext(WebSocketContext);

  console.log("ws", ws);

  return <h1>Main</h1>;
};

export default Main;
