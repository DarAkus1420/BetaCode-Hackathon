import jwtStrategy from '../middleware/strategies/jwt';
import localStrategy from '../middleware/strategies/local';

const passportConfig = passport => {
	passport.use('local', localStrategy);
	passport.use('jwt', jwtStrategy);
	passport.serializeUser((user, done) => {
		done(null, user);
	});
	passport.deserializeUser((user, done) => {
		done(null, user);
	});
};

export default passportConfig;
