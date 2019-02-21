const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const users = require('./routes/api/users');
const movies = require('./routes/api/movies');
const shows = require('./routes/api/shows');
const admin = require('./routes/api/admin');
const mail = require('./routes/api/mail');

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
app.use('/api/admin', admin)
app.use('/api/mail', mail)

//Serve static assers if in production
if(process.env.NODE_ENV === 'production'){  
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) =>{  
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));