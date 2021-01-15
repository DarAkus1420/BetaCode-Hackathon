import { Strategy } from 'passport-local';
import bcrypt from 'bcrypt';
import User from '../../components/users/model';

const strategyConfig = {
	emailField: 'email',
	passwordField: 'password',
	session: false,
};

const strategy = new Strategy(strategyConfig, async (email, password, done) => {
	try {
		const user = await User.findByEmail(email.toLowerCase());
		if (!user) return done(null, false);
		if (!bcrypt.compareSync(password, user.password)) return done(null, false);
		return done(null, user);
	} catch (e) {
		console.error(e);
		return done(null, false);
	}
});

export default strategy;
