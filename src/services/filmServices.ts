import { conflictError, notFoundError } from "../errors/index.js";
import { Film } from "../protocols/Film.js";
import filmRepositories from "../repositories/filmRepositories.js";

async function create({ title, year, countryId, genresId }: Film) {
    const filmExist = await filmRepositories.findFilmByTitle({ title })
    if (filmExist) throw conflictError("Film already exists")
    
    await filmRepositories.create({ title, year, countryId, genresId })
    
    
}


async function findMany() {
    const filmList = await filmRepositories.findMany()
    if (!filmList) throw notFoundError()
    return filmList
    
}

async function exclude(filmId : number) {
    const filmExclude = await filmRepositories.findFilmById(filmId)
    if (!filmExclude) throw notFoundError()
    
   await filmRepositories.excludeFilm(filmId)
}

async function update({ title, year, countryId, genresId }: Film , filmId: number) {
    const idExist = await filmRepositories.findFilmById(filmId)
    if (!idExist) throw notFoundError()
    if(idExist.title !== title) throw conflictError("This title does not match")
    
    await filmRepositories.updateFilm({ title, year, countryId, genresId })
    
    
}


export default {
    create,
    findMany,
    exclude,
    update
}