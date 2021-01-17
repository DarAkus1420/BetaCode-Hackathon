import songRoutes from '../components/song/routes';
import authRoutes from '../components/auth/routes';
import userRoutes from '../components/users/routes';

const apiVersion = '/api/v1';

export default app => {
	app.use(apiVersion, songRoutes);
	app.use(apiVersion, authRoutes);
	app.use(apiVersion, userRoutes);
};
