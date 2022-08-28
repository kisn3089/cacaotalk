const SocketIO = require("socket.io");

import { Application, NextFunction, RequestHandler } from "express";
import { Server } from "net";
import { Socket } from "socket.io";

const socket = (server: Server, app: Application, session: RequestHandler) => {
  const io = SocketIO(server, {
    path: "/socket.io",
    cors: {
      origin: "*",
    },
  });

  app.set("io", io);

  const chat = io.of("/chat");

  io.use((socket: Socket, next: NextFunction) => {
    const req = socket.request;
    // @ts-ignore
    const res = socket.request.res || {};
    // @ts-ignore
    session(req, res, next);
  });

  // @ts-ignore
  chat.on("connection", async (req, res) => {
    // @ts-ignore
    socket.toString("join", (roomId) => {
      // @ts-ignore
      socket.join(roomId);
    });
    // @ts-ignore
    socket.on("disconnection", (data) => {
      console.log("Disconnection to chat");
    });
  });
};

export default socket;
