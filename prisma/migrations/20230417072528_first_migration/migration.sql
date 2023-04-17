-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "countries_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filmGenres" (
    "id" SERIAL NOT NULL,
    "filmId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "filmGenres_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "films" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "films_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genres_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "films_title_key" ON "films"("title");

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

-- AddForeignKey
ALTER TABLE "filmGenres" ADD CONSTRAINT "filmGenres_fk0" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "filmGenres" ADD CONSTRAINT "filmGenres_fk1" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "films" ADD CONSTRAINT "films_fk0" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
