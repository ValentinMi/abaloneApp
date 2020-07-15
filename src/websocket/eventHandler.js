import * as userEvents from "../constants/userEvents";

/**
 * @param {SocketIOClient.Socket} socket
 * @param {React.DispatchWithoutAction} dispatch
 */

export const eventHandler = (socket, name, dispatch) => {
  console.log("toto", name);

  socket.emit(userEvents.USER_CHOOSE_NAME, name);
  socket.on("fromServer", msg => console.log(msg));
};
