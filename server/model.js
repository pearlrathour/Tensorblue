const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const ChatSchema = new Schema({
  topic: {
      type: String,
      required: true
  },
  messages: [
      {
          type: String,
          required: true
      }
  ]
});

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  chats: [ChatSchema]
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);