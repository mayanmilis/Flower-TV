const express = require('express');
const router = express.Router();

//Item Model
const Admin = require('../../models/Admin');

// @rout    GET api/items
// @desc    GET All Items
// @access  Public

router.get('/', (req,res) =>{   
    Admin.find() 
    .sort({date : -1})
    .then(items => res.json(items));
});

// @rout    POST api/items
// @desc    Create A Item
// @access  Public

router.post('/', (req,res) =>{   
    const newAdmin = new Admin({  
        email: req.body.email,
        password: req.body.password
    });

    newAdmin.save().then(item => res.json(item));

});

// @rout    DELETE api/items/:id
// @desc    Delete A Item
// @access  Public

router.delete('/:id', (req,res) =>{   
    Admin.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success: false}))
});

module.exports = router;