var express = require('express');
var router = express.Router();
var handleDB = require('../handleDB.js');
var connectDB = require('../db-connect');
var User = require('../user_models.js');

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page*/
router.get('/login', function(req, res, next) {
  res.render('page-login',{ message: ""});
});

/* GET user page */
router.get('/users-page', function(req, res, next) {
  
  function findAll() {
    User.find({}, function(err, data){
    console.log("data:" , data);
    res.render('users-page', { myArray: data});
    })
  };
  connectDB(findAll);
});

/* POST admin page */
router.post('/admin', urlencodedParser, function(req, res, next){
  console.log("Enter admin");
  if (!req.body) return res.sendStatus(400);

  // Check password
  function passwordVerify(password) {
    console.log("Password is: " , password);

    // So sánh password trả về từ db và input của người dùng
    if (req.body.password === password){ // Nếu password chính xác
      res.render('admin');
    }
    else {
      // Trả về thông báo login fail
      res.render('page-login',{ message: "Login failed!"});
    }
  } 
  // Connect MongoDB & verify password
  var password = handleDB(passwordVerify, req);
})

// Export Router
module.exports = router;
