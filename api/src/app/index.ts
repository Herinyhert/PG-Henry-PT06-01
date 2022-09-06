import express, { json } from 'express';
import router from "./routes";
import morgan from "morgan";
import cors from "cors";
import passport from 'passport';
import middlewarepassport from './middlewares/passport';
const app = express();

app.use(morgan("dev"));
app.use(json())
app.use(cors({ origin: 'https://ecomerce-app-one.vercel.app', credentials: true }));
app.use('/', router);
app.use(passport.initialize())
passport.use(middlewarepassport)


export default app;