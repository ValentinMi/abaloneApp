import React, { createContext, useReducer } from "react";
import * as events from "../constants/events";
import { eventHandler } from "./eventHandler";
import socketIOClient from "socket.io-client";
import { useEffect } from "react";
import { useCallback } from "react";
const ENDPOINT = "http://127.0.0.1:8000";

export const WebSocketContext = createContext(null);

// Initial state
const initialState = {
  socket: null,
  players: [],
  games: [],
  playerName: null,
  room_id: null,
  boardData: null
};

// We wrap provider in a component to add logic in
export const WebSocketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const connect = useCallback(() => {
    const socket = socketIOClient(ENDPOINT);

    // Set Socket
    dispatch({
      type: events.SET_SOCKET,
      payload: { socket }
    });

    console.log("Connected");

    eventHandler(socket, state.playerName, dispatch);
  }, [state.playerName]);

  // Connect when player choose name
  useEffect(() => {
    if (state.playerName) {
      connect();
    }
  }, [state.playerName, connect]);

  // Join room
  useEffect(() => {
    if (state.room_id) {
    }
  });

  return (
    <WebSocketContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WebSocketContext.Provider>
  );
};

// Our reducer to manage state and events
function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case events.SET_SOCKET:
      return { ...state, socket: payload.socket };

    case events.CONNECT:
      return { ...state, playerName: payload.name };

    case events.LOBBY_INFOS: {
      console.log(payload);
      return { ...state, players: payload.players, games: payload.games };
    }

    default:
      return state;
  }
}
