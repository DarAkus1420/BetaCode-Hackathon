import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const URL_DB = process.env.URL_DB;
export const DEBUG = process.env.DEBUG;

export const JWT_EXPIRATION = process.env.JWT_EXPIRATION;
export const JWT_PASS = process.env.JWT_PASS;

export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
export const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

export const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
export const YOUTUBE_VIDEO_BASE_URL = process.env.YOUTUBE_VIDEO_BASE_URL;

export const API_LYRICS_URL = process.env.API_LYRICS_URL;
