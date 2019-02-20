const express = require('express');
const router = express.Router();

//Item Model
const User = require('../../models/User');

// @rout    GET api/items
// @desc    GET All Items
// @access  Public

router.get('/', (req,res) =>{   
    User.find() 
    .sort({date : -1})
    .then(items => res.json(items));
});

// @rout    POST api/items
// @desc    Create A Item
// @access  Public

router.post('/', (req,res) =>{   
    const newUser = new User({  
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
    });

    newUser.save().then(item => res.json(item));

});



// @rout    DELETE api/items/:id
// @desc    Delete A Item
// @access  Public

router.delete('/:id', (req,res) =>{   
    User.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success: false}))
});

module.exports = router;