// import important parts of mongoose  library
const { Model, Schema } = require('mongoose');

//new database
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "Please enter a valid Username",

    },
    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/],
      required: "Please enter a valid email",
    },
    thoughts: [
{
  type: Schema.Types.ObjectId,
  ref: "Thought",
},
    ],
  },
)


UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;

