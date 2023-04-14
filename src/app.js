
import express from 'express'
import path from 'path';

const app = express();

const publicPath = path.join(__dirname, 'public')

app.use(express.static(publicPath));

export default app;