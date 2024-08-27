import  path from 'path';
import { config } from 'dotenv';

const filename = '.env.development.local'

config({
    path: path.resolve(__dirname, '..', filename)
})

export const { MONGO_URI, ORIGIN } = process.env;

