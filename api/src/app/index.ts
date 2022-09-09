import express, { json } from 'express';
import router from "./routes";
import morgan from "morgan";
import cors from "cors";
import auth from './middlewares/passport';
const app = express();

app.use(morgan("dev"));
app.use(json())
app.use(cors({ origin: '*', credentials: true }));
app.use('/', router);
app.use(auth.initialize())


export default app;

