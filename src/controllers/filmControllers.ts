import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Film } from "../protocols/Film.js";
import filmServices from "../services/filmServices.js";


async function create(req: Request, res: Response, next: NextFunction) {
    const newFilm = req.body as Film
    try {
        await filmServices.create(newFilm)
        return res.sendStatus(StatusCodes.CREATED)

    } catch (error) {
        next(error)
    }
}

async function findMany(req: Request, res: Response, next: NextFunction) {

    try {
        const filmList = await filmServices.findMany()
        return res.status(StatusCodes.OK).send(filmList)

    } catch (error) {
        next(error)
    }
    
}





export default {
    create,
    findMany
}