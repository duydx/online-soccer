var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: String
});
module.exports = mongoose.model('users', userSchema);  