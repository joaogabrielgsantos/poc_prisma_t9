import { conflictError } from "../errors/index.js";
import { Film } from "../protocols/Film.js";
import filmRepositories from "../repositories/filmRepositories.js";

async function create({ title, year, countryId, genresId }: Film) {
    const filmExist = await filmRepositories.findFilmByTitle({ title })
    if (filmExist) throw conflictError("Film already exists")
    
    await filmRepositories.create({ title, year, countryId, genresId })
    
    
}

export default {
    create
}