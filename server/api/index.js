require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Conneced to MongoDB Server...`)
}).catch(err => {
    console.log(err)
    process.exit(1);
})
const app = require('./app');


const PORT = 8080

app.listen(PORT)

