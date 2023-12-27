const express = require('express') //express get all power of 'express' module
const app = express() // () it basically run the variable express

app.set("view engine", "ejs"); //we have to set view engine and ejs as extension

app.use(express.static("./public"));

app.get("/", function(req, res){
    res.render("index"/*name of the file in views folder without .ejs extension*/, {age:18}); //index.ejs present on views folder
})

app.get("/error", function(req, res){    // it will search middleware(errorhandling funct) for error handling 
                                         // that we have created  at the bottom.. 
    throw Error("Something went wrong"); // inside error handling function (err get this value "Something went wrong" )
})



// app.use(function(req, res, next){   // we have to define a function inside middleware 
//     console.log("middleware is working")
//     next(); //it push the control(req) to next middleware or route
// })

// app.get('/', function(req, res) {  //get req..
//     res.send('Hello World');
// });

// app.get('/profile/:username', function(req, res){
//     res.send(`Hello ${req.params.username}`); // req.params ->  params is parameter
// });


app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err }) //error.ejs present in views folder
  })

app.listen(3000)