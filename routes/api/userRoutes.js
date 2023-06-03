const router = require('express').Router();
const {
    findUsers,
    findOneUser,
    createUser,
    updateUser,
    removeUser,
} = require('../../controllers/userController');

// /api/users (GET to find all users and POST to create a user)
router.route('/').get(findUsers).post(createUser);

// /api/users/:userId (GET to find one user given an id, PUT to update a user given an id, and DELETE to remove a user given an id)
router.route('/:userId').get(findOneUser).put(updateUser).delete(removeUser);

// api/users/:userId/friends/:friendId (POST to add a user to friends list, DELETE to remove a friend from friends list)
router.route('/users/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;