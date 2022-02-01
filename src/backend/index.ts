import express from "express"
import dotenv from "dotenv"
import { router } from "./routes";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io"

dotenv.config({path : "../.env"});

const port = Number(process.env.PORT) || 2000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(router);


httpServer.listen(port, () => console.log("app connected"));