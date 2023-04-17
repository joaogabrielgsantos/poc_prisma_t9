import { Film } from "../protocols/Film.js";
import filmRepositories from "../repositories/filmRepositories.js";

async function create({ title, year, countryId, genresId }: Film) {
    const filmExist = await filmRepositories.findFilmByTitle({ title })
    if (filmExist) throw new Error("Film already exists")
    
    const resultado = await filmRepositories.create({ title, year, countryId, genresId })
    console.log(resultado);
    
}

export default {
    create
}