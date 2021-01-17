import Joi from 'joi';

const authSchema = {
	register: Joi.object({
		name: Joi.string().min(3).max(100).required(),
		lastName: Joi.string().min(3).max(100).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(5).max(20).required(),
	}),
	login: Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(5).max(20).required(),
	}),
};

export default authSchema;
