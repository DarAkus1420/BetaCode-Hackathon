import mongoose from 'mongoose';
import { URL_DB } from '../../config/dotenv';

mongoose.Promise = global.Promise;

async function connect() {

    try {
        
        await mongoose.connect(URL_DB, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true });
        
        const db = mongoose.connection;

        // Events
        db.on('disconnected', (err) => {
            console.log(`MongoDB  disconnected: ${URL_DB}`);
            connect();
        });

        db.on('reconnected', (err) => {
            console.log(`MongoDB  reconnected: ${URL_DB}`);
        });

        // Success
        console.log(`\nMongoDB  connected on ${URL_DB}\n`);

    } catch (err) {
        console.log(`MongoDB  connection error: ${URL_DB} details ${err}`);
        process.exit(-1);
    }
}

export default connect;