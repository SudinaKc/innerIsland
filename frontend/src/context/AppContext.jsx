import { io } from "socket.io-client";
import React from "react";
import { createContext } from "react";

const SOCKET_URL="http://localhost:3000"

export const Socket=io(SOCKET_URL)
// app context

export const AppContext = createContext();