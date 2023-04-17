import { Request, Response, Router } from "express";

const filmRoutes = Router()


filmRoutes
    .get("/status", (req: Request, res: Response) => res.send("OK!"))




export default filmRoutes