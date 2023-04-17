import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Film } from "../protocols/Film.js";
import filmServices from "../services/filmServices.js";


async function create(req: Request, res: Response) {
    const newFilm = req.body as Film
    try {
        await filmServices.create(newFilm)
        return res.sendStatus(StatusCodes.CREATED)

    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
    }
    

}

export default {
    create
}