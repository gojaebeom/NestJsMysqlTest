import * as Joi from 'joi';

export const registerSchema = Joi.object({
    account : Joi.string().required(),
    password: Joi.string().required(),
    email : Joi.string().required(),
    name : Joi.string().required(),
    phone : Joi.string().required()
});

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})