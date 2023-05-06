// import important parts of mongoose library
const { Schema, Model, Types } = require('mongoose');
const dateFormat = require("../utils/dates");

const ReactionSchema = new Schema(
  {
    reactionId: {
      // Mongoose's ObjectId data type
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      // Set default time to current time for timestamp
      default: Date.now,
      // timestamp on query
      get: (timestamp) => dateFormat(timestamp),
    },
  },
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Thought is Required",
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      // format the timestamp on query
      get: (timestamp) => dateFormat(timestamp),
    },

    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
