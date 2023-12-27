var express = require('express');

var router = express.Router();
const userModel = require("./users") // we create our model in user.js , here we have export it

// To set a cookie

router.get("/", function(req, res){
  res.cookie("age", 25);  // we set cookie on frontend, so res
  res.render("index");
})

// To read a cookie

router.get("/read", function(req, res){
  console.log(req.cookies.age); // to read from client we use req
  res.send("check");
})

// To delete a cookie

router.get("/delete", function(req, res){
  res.clearCookie("age");
  res.send("clear hogayi cookie");
})



// session created

// router.get("/", function(req, res){
//   req.session.ban = true; // here we create a session and initialize a var ban(user-define) 
//                           // Now , I can use this session in any route this is the property 

//   res.render("index", {title : "Sarthak is best"});
// });

// // router.get("/checkban", function(req, res){
// //   console.log(req.session); // here we use the above session
// //   res.send("check kiya hai console ko dekh lol!!") 
// // })


// read session 

// router.get("/checkban", function(req, res){
//   if(req.session.ban === true){ // here we use the above session and read it 
//     res.send("you are ban motherfucker lol!!") 
//   }
//   else{
//     res.send("not banned")
//   }
// })

// // To remove ban (destroy session)

// router.get("/removeban", function(req, res){
//   req.session.destroy(function(err){
//     if(err) throw err;
//     res.send("ban removed")
//   })
// })




// server kai restart honeh seh session delete hojatah hai






// everything related to usermodel is asynch

// router.get("/create", async function(req, res){     // await never run alone it run with async, so we have to 
//                                                     // tell in this way that function is async
  
//   const createuser = await userModel.create({       // usermodel is the model we create in user.js , here 
//     username : "s-thak",                              // create function is asynchrounous, the problem with them                              
//     name : "sarthak",                                 // they run at the end, like here after send...so if this function
//     age : 20                                        // fails in between still we get message "ban gaya"..  
//   })                                                // we always have to pass a object in create function,
//   res.send(createuser);                             // here, we pass acc to our model(form collection in db)
// });                                                 // await, here solve this problem and allow create function
//
                                                     // to run before send ...


// Let's learn how to read

// router.get("/allusers", async function(req, res){
//   let allusers = await userModel.find(); // find give all schema present in collection to this variable
//   res.send(allusers);                               // in the array form.     
// })



// To call one user

// router.get("/allusers", async function(req, res){
//   let allusers = await userModel.findOne({username : "s-thak"}); // findone give one user schema present in collection to this variable
//   console.log(allusers)                     // if it gives null, that data does not exit  
//   res.send(allusers);                                    
// })

// To delete user

router.get("/delete", async function(req, res){
  let deleteuser = await userModel.findOneAndDelete({
    username : "s-thak"
  })
  res.send(deleteuser);
})

// It show empty error

router.get("/allusers", async function(req, res){
  let allusers = await userModel.find(); // find give all schema present in collection to this variable
  res.send(allusers);                               // in the array form.     
})

module.exports = router;




// story happening in db
// practicekro(database) ----> user (collection) ----> schema (data inserted username - s-thak)
