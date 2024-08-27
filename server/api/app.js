const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json())
app.use(cors({ origin: '*'}))


app.get('/', function(req, res) {
    return res.send('RealEstate Management')
})
app.use('/api/properties', require('./routes/properties'));


module.exports = app;