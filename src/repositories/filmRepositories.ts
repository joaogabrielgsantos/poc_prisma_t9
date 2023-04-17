import prisma from "../config/database.js";
import { Film, FilmResponse } from "../protocols/Film.js";

async function findFilmByTitle({ title }): Promise<FilmResponse> {
    const film = await prisma.films.findUnique({
        where: {
            title: title
        }
    })
    return film

}


async function create({ title, year, countryId, genresId }: Film): Promise<FilmResponse> {
    const newFilm = await prisma.films.create({
        data: {
            title,
            year,
            countryId,
            filmGenres: {
                create: genresId.map(genreId => ({
                    genreId: genreId
                }))
            }
        }
    })
    return newFilm
}



export default {
    create,
    findFilmByTitle
}
