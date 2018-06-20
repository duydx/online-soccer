var connectDB = function(callback){
    var _ = require('lodash');
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://duy:oracle123@ds163700.mlab.com:63700/soccer-online');

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log("Connected!");
    });
    callback();
}

module.exports = connectDB;