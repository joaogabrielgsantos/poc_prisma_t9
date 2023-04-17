import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export function handleApplicationErrors(err: Error, req: Request, res: Response, next: NextFunction){
    if(err.name === "ConflictError"){
        return res.status(StatusCodes.CONFLICT).send({message: err.message})
    }
    if(err.name === "NotFoundError"){
        return res.status(StatusCodes.NOT_FOUND).send({message: err.message})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message:"Internal Server Error"
    })
}


