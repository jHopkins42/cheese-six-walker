//constants
const router = require("express").Router();
const {
  getAllThought,
  getThoughtByID,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeFReaction,
} = require("../../controllers/thoughts");

// create thinkings
router.route("./").get(getAllThought).post(createThought);

// get thought by ID for gets, updates, or deletes
router.route("./:id").get(getThoughtByID).put(updateThought).delete(deleteThought);

//repeating with reactions
router.route("./userID/friends/:reactionId").post(addReaction).delete(removeFReaction);

module.exports = router;

