import searchRoutes from '../components/search/routes';
import authRoutes from '../components/auth/routes';

const apiVersion = '/api/v1';

export default app => {
	app.use(apiVersion, searchRoutes);
	app.use(apiVersion, authRoutes);
};
