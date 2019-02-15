const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const users = require('./routes/api/users');
const movies = require('./routes/api/movies');
const shows = require('./routes/api/shows');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/users', users)
app.use('/api/movies', movies)
app.use('/api/shows', shows)

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));