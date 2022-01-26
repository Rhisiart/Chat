import express from "express"
import dotenv from "dotenv"
import { router } from "./routes";
import cors from "cors";

dotenv.config({path : "../.env"});

const app = express();

const port = Number(process.env.PORT) || 2000;

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(router);


app.listen(port, () => console.log("app connected"));