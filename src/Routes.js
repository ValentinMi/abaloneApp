import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { WebSocketContext } from "./websocket/WebSocket.context";

const Routes = () => {
  const { playerName } = useContext(WebSocketContext);

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      {playerName && <Route exact path="/main" component={Main} />}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
