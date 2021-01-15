import { port } from './config/dotenv'
import app from './app';

app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})