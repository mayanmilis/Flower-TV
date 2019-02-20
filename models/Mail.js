const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const mailSchema = new Schema({ 
    firstName: { 
        type: String,

    },
    lastName: { 
        type: String,

    },
    id:{    
        type: Number,

    },
    phoneNumber: { 
        type: String,

    },
    email:{  
        type: String,

    },
    date: { 
        type: Date,
        default: Date.now
    }

});

module.exports = Mail = mongoose.model('mail', mailSchema)