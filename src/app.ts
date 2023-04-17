import "express-async-errors"
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { handleApplicationErrors } from "./middlewares/errorMiddleware.js";




const app = express();
app
    .use(express.json())
    .use(cors())
    .use(routes)
    .use(handleApplicationErrors)




export default app;