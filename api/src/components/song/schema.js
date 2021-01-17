import Joi from 'joi';

const songSchema = {
	search: Joi.object({
		query: Joi.string().min(3).max(100).required(),
		limit: Joi.number().optional().default(10),
	}),
	save: Joi.object({
		name: Joi.string().min(3).max(100).required(),
	}),
};

export default songSchema;
