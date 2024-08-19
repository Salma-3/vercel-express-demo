const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    return res.send('Express on Vercel')
})

app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = 8080

app.listen(PORT, () => console.log('Server ready on port', PORT))

module.exports = app;