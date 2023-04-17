import joi from 'joi';


export const filmSchema = joi.object({
    title:
        joi
            .string()
            .required(),
    year:
        joi
            .number()
            .integer()
            .min(1895)
            .required(),
    countryId:
        joi
            .number()
            .integer()
            .min(1)
            .max(34)
            .required(),
    genresId:
        joi
            .array().items(joi.number().integer().max(13))
            .required(),

});
