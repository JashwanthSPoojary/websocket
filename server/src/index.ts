import { WebSocketServer } from "ws";

const ws = new WebSocketServer({port:9090});

ws.on("connection",function(socket){

    socket.on('message',(message)=>{
        const data = message.toString()
        if(data==="ping"){
            socket.send("pong")
        }
    })
})