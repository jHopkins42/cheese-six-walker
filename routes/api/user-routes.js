//constants
const router = require("express").Router();
const {
  getAllUser,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
  addFirend,
  removeFriend,
} = require("../../controllers/users");

// create users
router.route("./").get(getAllUser).post(createUser);

// get user by ID for gets, updates, or deletes
router.route("./:id").get(getUserByID).put(updateUser).delete(deleteUser);

//repeating with friends
router.route("./userID/friends/:friendId").post(addFirend).delete(deleteUser);

module.exports = router;

