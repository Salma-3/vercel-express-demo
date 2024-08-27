import { MONGO_URI } from './config';
import mongoose from 'mongoose';
import app from './app';

mongoose.connect(MONGO_URI).then(() => {
    console.log(`Conneced to MongoDB Server...`)
}).catch(err => {
    console.log(err)
    process.exit(1);
})

const PORT = 8080

app.listen(PORT)

