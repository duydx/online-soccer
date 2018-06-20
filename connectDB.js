var _ = require('lodash');

var mongoose = require('mongoose');
mongoose.connect('mongodb://duy:oracle123@ds163700.mlab.com:63700/soccer-online');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected!");
});

var userSchema = mongoose.Schema({
    name: String,
    password: String,
    address: String,
    email: String
  });

var User = mongoose.model('User', userSchema);

// var silence = new User({
//     name: 'minh',
//     password: 'abc',
//     address: 'Hai Duong',
//     email: 'minh@wecommit'
// })

// silence.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     console.log("Inserted!")
//   });

User.find({name: 'duy'}, 'password', function(err, res){
    if(err) return console.error(err);
    var string = JSON.stringify(_.last(res));
    var password = JSON.parse(string);
    console.log(password['password']);
})

