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


async function findMany() {
    const listFilms = await prisma.films.findMany({

        select: {
            id: true,
            title: true,
            year: true,
            countryId: false,
            countries: true,
            filmGenres: {
                select: {
                    genres: true

                }
            },

        }
    })
    return listFilms

}


async function findFilmById(filmId: number) {
    const film = await prisma.films.findUnique({
        where: {
            id: filmId
        }
    })
    return film

}

async function excludeFilm(id: number) {
    await prisma.filmGenres.deleteMany({
        where: {
            filmId: id
        }
    })

    await prisma.films.delete({
        where: {
            id: id
        }
    })

}

async function updateFilm({ title, year, countryId, genresId }: Film) {
    const updatedFilm = await prisma.films.update({
        where: {
            title: title,
        },
        data: {
            year: year,
            countryId: countryId,
            filmGenres: {
                deleteMany: {},
                create: genresId.map((genreId) => ({
                    genreId: genreId,
                })),
            },
        },
    });

    return updatedFilm;

}



export default {
    create,
    findFilmByTitle,
    findMany,
    findFilmById,
    excludeFilm,
    updateFilm
}
