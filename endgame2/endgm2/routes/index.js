var express = require('express');
var router = express.Router();
const userModel = require("./users");

// code for Registering user 

const passport = require("passport");
const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

// profile route

router.get('/profile', isLoggedIn /* we here making a middleware that's why not using isLoggedIn(), this use when calling function*/, 
  function(req, res) {
    res.render("profile");
});


// register route

router.post("/register", function(req, res){
  var userData = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });

  userModel.register(userData, req.body.password).then(function(registeredUser){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    });
  });
});

// login route

router.post("/login", /*middeleware it will run before function(req, res)*/ passport.authenticate("local", {
  successRedirect: "/profile", // if sucess open profile page in views folder
  failureRedirect: "/"
}), function(req, res){});

// logout route

router.get("/logout", function(req, res, next){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect("/");
  })
})

// this for protection like if someone has type wrong route it will make sure to route that req in "/"

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next(); // isAuthenticate true hai toh agai bdoh like function otherwise / route mai jaao 
  }
  res.redirect("/");
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get('/login', function(req, res, next) {
//   // agar login ho jaey toh profile page dikha doh
//   // agar na ho toh mujhe dushre route mai lai jaa lo , ex->"/route" and waha dikha doh failed
//   // btw this scenrio not possible because we can not pass data of one route to other route....
//   // flash message apko allow krteh hai ki app is route mai bneh data ko dushre routes mai use krr sko

// });

router.get('/failed', function(req, res) {
  req.flash("age", 12); // req.flash("Name", data);
  res.send("ban gaya");
});

router.get('/check', function(req, res) {
  console.log(req.flash('age'));
  res.send("check krlo data terminal mai!!");
});


// router.get("/create", async function(req, res){
//   let userData = await userModel.create({
//     username: "chandreshekar",
//     nickname: "chandu",
//     description: "I am a guy of 23",
//     categories: ["doctor", "school"] 
//   })
//   res.send(userData);
// });


//How can I perform a case-insensitive search in Mongoose?

// router.get("/find", async function(req, res){
//   var regex = new RegExp("^chandreshekar$", 'i'); // RegExp("word", 'flag') 'i' -> case insensitive
//   // ^ shuruwat aisi ho , for ex-> ^sarthak , this mean start from sarthak
//   // $ ending aisi ho , for ex-> sarthak$ , this mean end from sarthak
//   // ^sarthak$, word must be sarthak
//   let user = await userModel.find({username : regex});
//   res.send(user);
// })


// How do I find documents where an array field contains all of a set of values?
router.get("/find", async function(req, res){
  let user = await userModel.find({categories: /*field name*/ { $all: ["js"] } });
  res.send(user);
})


module.exports = router;
