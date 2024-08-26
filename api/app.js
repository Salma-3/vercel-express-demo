const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();

app.use(express.json())
app.use(cors({ origin: '*'}))
app.use(express.static('client/build'));

app.get('/', function(req, res) {
    return res.send('Properties Api')
})

app.get('/api/properties', require('./routes/properties'));

// app.get('*', function(req, res){
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// })


module.exports = app;