const validation = (schema, property) => {
	return (req, res, next) => {
		const { error } = schema.validate(req[property]);
		if (!error) {
			next();
		} else {
			const { details } = error;
			console.error(details[0].message);
			res.status(422).json({ errors: details });
		}
	};
};

export default validation;
