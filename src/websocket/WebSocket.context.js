import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback
} from "react";
import * as events from "../constants/events";
import { eventHandler } from "./eventHandler";
import socketIOClient from "socket.io-client";
import { useToast } from "@chakra-ui/core";

const ENDPOINT = "http://127.0.0.1:8000";

export const WebSocketContext = createContext(null);

// Initial state
const initialState = {
  socket: null,
  players: [],
  games: [],
  playerName: null,
  player: null,
  currentGame: null,
  boardData: null,
  error: null
};

// We wrap provider in a component to add logic in
export const WebSocketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toast = useToast();

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

  // On error change
  useEffect(() => {
    if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        status: "error",
        duration: 7000
      });
    }
  }, [state.error, toast]);

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

    case events.LOBBY_INFOS:
      if (payload.player)
        return {
          ...state,
          players: payload.players,
          player: payload.player,
          games: payload.games
        };
      return {
        ...state,
        players: payload.players,
        games: payload.games
      };

    case events.GET_ERROR:
      return { ...state, error: payload.error };

    case events.CREATE_GAME: {
      console.log(state.player);
      state.socket.emit(events.CREATE_GAME, state.player);
      return { ...state };
    }

    default:
      return state;
  }
}
