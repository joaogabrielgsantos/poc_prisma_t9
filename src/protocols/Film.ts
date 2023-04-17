export type FilmEntity = {
    id: number,
    title: string,
    year: number,
    countryId: number,
    genresId:number[],
}

export type Film = Omit<FilmEntity, "id">
export type FilmResponse = Partial<FilmEntity>