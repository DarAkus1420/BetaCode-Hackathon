import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const URL_DB = process.env.URL_DB;
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION;
export const JWT_PASS = process.env.JWT_PASS;
