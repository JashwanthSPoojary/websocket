"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ws = new ws_1.WebSocketServer({ port: 9090 });
ws.on("connection", function (socket) {
    socket.on('message', (message) => {
        const data = message.toString();
        if (data === "ping") {
            socket.send("pong");
        }
    });
});
