import { PORT } from './config/dotenv';
import app from './app';

app.listen(PORT, () => {
	console.log(`Listen on port ${PORT}`);
});
