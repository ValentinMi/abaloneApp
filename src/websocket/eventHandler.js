import * as events from "../constants/events";

/**
 * @param {SocketIOClient.Socket} socket
 * @param {React.DispatchWithoutAction} dispatch
 */

export const eventHandler = (socket, name, dispatch) => {
  // Send player name
  socket.emit(events.USER_CHOOSE_NAME, name);

  // On receive lobby infos
  socket.on(events.LOBBY_INFOS, infos => {
    console.log("infos", infos);
    dispatch({
      type: events.LOBBY_INFOS,
      payload: infos
    });

    // On receive error
    socket.on(events.GET_ERROR, error => {
      dispatch({
        type: events.GET_ERROR,
        payload: { error }
      });
    });
  });
};
