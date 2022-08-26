import express, { json } from 'express';
import router from "./routes";
import morgan from "morgan";
import cors from "cors";
const app = express();

app.use(morgan("dev"));
app.use(json())
app.use('/', router);
app.use(cors({ origin: "*", credentials: true }));


export default app;