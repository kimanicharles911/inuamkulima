// Comments are found in the last part of this file.
import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.json());
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongoDbPassword = process.env.MONGODB_PASSWORD;
const EXPRESS_APP_PORT = process.env.PORT || 8080;
const MONGO_DB_USERNAME = "charles";
const MONGO_DB_DATABASE = "test";

import {routes} from './routes/index.js';

// connect to online mongoDB
mongoose.connect(`mongodb+srv://${MONGO_DB_USERNAME}:${mongoDbPassword}@emmethubclusterone.disfr.mongodb.net/${MONGO_DB_DATABASE}?retryWrites=true&w=majority`, () => {
  console.log(`Connected to ${MONGO_DB_DATABASE} database.`);
}, (e) => console.error(`${e} Error connecting to ${MONGO_DB_DATABASE} database!`))

app.use('/api', routes);


app.listen(EXPRESS_APP_PORT, () => {
  console.log(`App Server is listening at http://localhost:${EXPRESS_APP_PORT}`);
});
