import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { WebSocketProvider } from "./contexts/WebSocket.context";
import { theme, ThemeProvider } from "@chakra-ui/core";

import Routes from "./Routes";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <WebSocketProvider>
          <Routes />
        </WebSocketProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
