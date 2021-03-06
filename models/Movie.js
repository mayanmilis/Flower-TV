const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const MovieSchema = new Schema({ 
    name: { 
        type: String,

    },
    title: { 
        type: String,

    },
    youtube: { 
        type: String,

    },
    poster_path: { 
        type: String,

    },
    id:{    
        type: Number,

    },
    vote_average: { 
        type: Number,

    },
    overview:{  
        type: String,

    },
    first_air_date:{    
        type: String
    },
    
    date: { 
        type: Date,
        default: Date.now
    }

});

module.exports = Movie = mongoose.model('movie', MovieSchema)