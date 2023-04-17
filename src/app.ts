import express from "express";
import cors from "cors";
import routes from "./routes/index.js";




const app = express();
app
    .use(express.json())
    .use(cors())
    .use(routes)




export default app;