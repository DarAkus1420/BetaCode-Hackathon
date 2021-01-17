import { JWT_PASS } from '../../config/dotenv';
import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../../components/users/model';

const strategyConfig = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
	secretOrKey: JWT_PASS,
};

const jwtStrategy = new Strategy(strategyConfig, async (jwt_payload, done) => {
	User.findOne({ _id: jwt_payload.sub })
		.then(user => {
			if (user) return done(null, user);
			return done(null, false);
		})
		.catch(err => done(err, false));
});

export default jwtStrategy;
