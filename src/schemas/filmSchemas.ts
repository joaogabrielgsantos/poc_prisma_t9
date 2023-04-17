import joi from 'joi';


const filmSchema = joi.object({
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
    country:
        joi
            .string()
            .required(),
    genre:
        joi
            .array().items(joi.string())
            .required(),

});



export default {
    filmSchema,
}