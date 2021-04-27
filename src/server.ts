import express from 'express';
import Routes from './router';

const app = express();

app.use(express.json())
app.use(Routes)

app.listen(3333, () => console.log("Server is running"));