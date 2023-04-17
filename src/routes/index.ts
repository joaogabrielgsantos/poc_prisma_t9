import { Router } from "express";
import filmRoutes from "./filmRoutes.js";


const routes = Router()

routes
    .use('/films', filmRoutes)

export default routes