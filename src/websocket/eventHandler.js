import * as events from "../constants/events";

/**
 * @param {SocketIOClient.Socket} socket
 * @param {React.DispatchWithoutAction} dispatch
 */

export const eventHandler = (socket, name, dispatch) => {
  // Send player name
  socket.emit(events.USER_CHOOSE_NAME, name);

  // Receive lobby infos
  socket.on(events.LOBBY_INFOS, infos => {
    dispatch({
      type: events.LOBBY_INFOS,
      payload: infos
    });
  });
};
