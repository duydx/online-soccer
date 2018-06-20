module.exports = function(callback, inp){
        var _ = require('lodash');

        var mongoose = require('mongoose');
        var User = require('./user_models.js');

        mongoose.connect('mongodb://duy:oracle123@ds163700.mlab.com:63700/soccer-online');

        var db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
        console.log("Connected!");
        });


        console.log(inp.body.email);

        // Tìm kiếm password trong username
        User.find({username: inp.body.email}, 'password', function(err, res){
            if(err) return console.error(err);
            var p = JSON.stringify(_.last(res));
            var password = JSON.parse(p);
            console.log("abc:" , password['password']);

            //Gọi lại hàm verify password
            callback(password['password']);
            
        })
        

}

