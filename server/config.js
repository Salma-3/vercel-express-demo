const path = require('path');
const filename = '.env.development.local'

require('dotenv').config({
    path: path.resolve(__dirname, filename)
})

const { MONGO_URI } = process.env;

module.exports = {
    MONGO_URI
}