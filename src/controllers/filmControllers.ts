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

async function exclude(req: Request, res: Response, next: NextFunction) {
    const {filmId} = req.params as Record<string, string>
    const id = Number(filmId)
    

    try {
        await filmServices.exclude(id)
        return res.sendStatus(StatusCodes.OK)

    } catch (error) {
        next(error)
    }
}

async function update(req: Request, res: Response, next: NextFunction) {
    const {filmId} = req.params as Record<string, string>
    const id = Number(filmId)
    const updateFilm = req.body as Film
    

    try {
        await filmServices.update(updateFilm, id)
        return res.sendStatus(StatusCodes.OK)

    } catch (error) {
        next(error)
    }
}



export default {
    create,
    findMany,
    exclude,
    update
}
