const router = require('express').Router();
const {
    findThoughts,
    findOneThought,
    createThought,
    updateThought,
    removeThought
} = require('../../controllers/thoughtController');

// /api/thoughts (GET to find all thoughts and POST to create a new thought)
router.route('/').get(findThoughts).post(createThought);

// /api/thoughts/:thoughtId (GET to find one thought given an id, PUT to update a thought given an id, and DELETE to delete a thought given an id)
router.route('/:thoughtId').get(findOneThought).put(updateThought).delete(removeThought);

module.exports = router;