import * as mongoose from "mongoose";

const express = require('express');
const bodyParser = require('body-parser');
const { JokeMiddleware } = require('./middleware/index');
const { ENV } = require('./config/env');
const app = express();
mongoose
	.connect(`mongodb://localhost/${ENV.dataBase}`, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		poolSize: 10
	})
	.then(() => console.log(`Server connect to Database ${ENV.dataBase}`));
if (ENV.debugMode) {
	mongoose.set('debug', true);
}

const Book = require('./route/route.books');

app.use(bodyParser.json());
app.use(Book);

app.listen(ENV.port, () => console.log(`Server listening on port ${ENV.port}`));





























