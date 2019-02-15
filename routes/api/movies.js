const express = require('express');
const router = express.Router();

//Item Model
const Movie = require('../../models/Movie');

// @rout    GET api/items
// @desc    GET All Items
// @access  Public

router.get('/', (req,res) =>{   
    Movie.find() 
    .sort({date : -1})
    .then(items => res.json(items));
});

// @rout    POST api/items
// @desc    Create A Item
// @access  Public

router.post('/', (req,res) =>{   
    const newMovie = new Movie({  
        name: req.body.name,
        title: req.body.title,
        id: req.body.id,
        vote_average: req.body.vote_average,
        overview: req.body.overview,
        youtube: req.body.youtube,
        poster_path: req.body.poster_path
    });

    newMovie.save().then(item => res.json(item));

});

// @rout    DELETE api/items/:id
// @desc    Delete A Item
// @access  Public

router.delete('/:id', (req,res) =>{   
    Movie.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success: false}))
});

module.exports = router;