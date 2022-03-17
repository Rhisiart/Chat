import express from "express";
import dotenv from "dotenv";
import { router } from "./routes";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io"
import { ClientToServerEvents, IData, InterServerEvents, ServerToClientEvents } from "./model/Socket";
import RoomServer from "./Socket/RoomServer";

dotenv.config({path : "../.env"});

const port = Number(process.env.PORT) || 2000;
const app = express();
const httpServer = createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, IData>(httpServer, {
    cors : {
        origin : "*"
    }
});
const roomServer = RoomServer.getInstance();

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(router);


io.on("connection", socket => {
    socket.on("join", args => {

        socket.data.group = args.group;
        socket.data.user = args.user;

        socket.join(args.group.id.toString());
        roomServer.join(args.group, args.user);
    });

    socket.on("sendMessage", (message, group, user) => {
        roomServer.sendMessage(io, message, group, user);
    });

    socket.on("disconnect", args => {
        if(!socket.data.group || !socket.data.user) return;

        roomServer.disconnect(socket.data.group, socket.data.user);
    });
});



httpServer.listen(port, () => console.log("app connected"));