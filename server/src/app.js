import express from 'express';
import cors from 'cors';
import { ORIGIN } from './config';
import propertiesRouter from './routes/properties';


const app = express();

app.use(express.json())
app.use(cors({ origin: ORIGIN }))


app.get('/', function(req, res) {
    return res.send('RealEstate Management')
})
app.use('/api/properties', propertiesRouter);


export default app;