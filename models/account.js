const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const accountSchema = new Schema({
  username: String,
  password: String
});

// Plugin passport-local-mongoose to add methods to the schema
accountSchema.plugin(passportLocalMongoose);

// Create and export the model
module.exports = mongoose.model('Account', accountSchema);
