const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require('path');
const handlebars = require("express-handlebars");
const connect = require("./app/config/db");

// loading configuration
dotenv.config({
	path: './app/config/config.env'
})

const app = express();

// connect to DB
connect();

// Logging
if (process.env.NODE_ENV === "development") {
	app.use(morgan('dev'));
}

// Handlebars
app.engine('.hbs', handlebars({
	extname: '.hbs',
	defaultLayout: 'main',
	partialsDir: path.join(__dirname, "./app/views/layouts/partials")
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './app/views'));

// Static folder
app.use(express.static(path.join(__dirname, './public')));

// Routes
app.use('/', require('./app/routes/index'))

const PORT = process.env.PORT || 3000;

app.listen(PORT,
	console.log('Server runnig on mode %s mode and on port %s', process.env.NODE_ENV, PORT)
)