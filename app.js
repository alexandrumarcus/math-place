const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require('path');
const handlebars = require("express-handlebars");
const connect = require("./app/config/db");
const livereload = require("livereload");
const server = livereload.createServer();
const connectLiveReload = require('connect-livereload');
const session = require("express-session");
const cors = require('cors');
const bodyParser = require('body-parser');
const expressminify = require('express-minify');
const passport = require("passport");

// loading configuration
dotenv.config({
	path: './app/config/config.env'
})

// Passport
require('./app/config/passport')(passport);

const app = express();
app.use(morgan('tiny'));
app.use(cors());
// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


server.watch(__dirname + "/public");
app.use(connectLiveReload());

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
	partialsDir: path.join(__dirname, "./app/views/layouts/partials"),
	helpers: require(path.join(__dirname, "./app/config/hbs-helpers"))
}));

// Sessions
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false,
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './app/views'));

// Static folder
app.use(express.static(path.join(__dirname, './public')));

// Routes
app.use('/', require('./app/routes/index'));

app.use(expressminify())


const PORT = process.env.PORT || 3000;
app.listen(PORT,
	console.log('Server runnig on mode %s mode and on port %s', process.env.NODE_ENV, PORT)
)