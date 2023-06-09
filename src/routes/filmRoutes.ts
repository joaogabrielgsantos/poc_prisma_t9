import { Request, Response, Router } from "express";
import filmControllers from "../controllers/filmControllers.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { filmSchema } from "../schemas/filmSchemas.js";

const filmRoutes = Router()


filmRoutes
    .get("/status", (req: Request, res: Response) => res.send("OK!"))
    .post("/", validateSchema(filmSchema), filmControllers.create)
    .get("/", filmControllers.findMany )
    .delete("/:filmId", filmControllers.exclude)
    .put("/:filmId", filmControllers.update)




export default filmRoutes