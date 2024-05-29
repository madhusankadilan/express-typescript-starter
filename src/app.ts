import express from 'express';
import bodyParser from 'body-parser';
import "reflect-metadata";
import routes from './routes';
import cors from "cors";

const app = express();
app.use(cors())
app.use(bodyParser.json());

// Add your routes here
app.use('/api', routes);

export default app;