const express = require('express');
const cors = require('cors');
const { ORIGIN } = require('./config');


const app = express();

app.use(express.json())
app.use(cors({ origin: ORIGIN }))


app.get('/', function(req, res) {
    return res.send('RealEstate Management')
})
app.use('/api/properties', require('./routes/properties'));


export default app;