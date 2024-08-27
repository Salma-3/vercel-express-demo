import { MONGO_URI, ORIGIN } from './config';
import mongoose from 'mongoose';
import app from './app';

mongoose.connect(MONGO_URI).then(() => {
    console.log(`Conneced to MongoDB Server...`)
}).catch(err => {
    console.log(err)
    process.exit(1);
})

console.log(MONGO_URI)
console.log(ORIGIN)

const PORT = 8080

app.listen(PORT)

