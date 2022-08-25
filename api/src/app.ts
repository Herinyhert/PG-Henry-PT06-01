import express, {Application} from 'express';
const app: Application = express();
import router from "../routes";
import morgan from "morgan";
import cors from "cors";

app.use(morgan("dev"));
app.use('/', router);
app.use(cors({ origin: "*", credentials: true }));

app.listen(3001, ()=>{
    console.log("ejecutando.....")
})


export default app;