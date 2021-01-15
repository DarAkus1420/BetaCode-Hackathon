import cors from 'cors';

export default app => {
    app.use(cors(false));
    app.use((req, res, next) => {
        res.header('Access-Controll-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });
}