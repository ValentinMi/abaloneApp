import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { WebSocketProvider } from "./websocket/WebSocket.context";

import Routes from "./Routes";

const App = () => {
  return (
    <Router>
      <WebSocketProvider>
        <Routes />
      </WebSocketProvider>
    </Router>
  );
};

export default App;
