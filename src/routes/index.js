import userRoutes from '../components/users/routes';
const apiVersion = '/api/v1';

export default app => {
	app.use(apiVersion, userRoutes);
};
