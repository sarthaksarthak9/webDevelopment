- node vs express - node is the main thing , express kai code seh hum server ka code likh pateh hai and server kaisai react krraiga voh bhi hum express kai code seh likh teh hai 

- what is express js - package, used for routing and server management

- why express js - http is difficult in node , it makes it easy!! 

- routing - process of creating a route!!.<br>
for ex - /routing, /home, /contact

- middleware - yai ek esa function hota hai joh har route seh phelai chltah hai, iska mtlb koisa bhi routes chlai useh phelai middleware execute hoga and usmai likha code phelai chlaiga!!..

- node kai sath kai dikkat hai ki agar control ek baar bhi kisi middleware mai jaeyga toh khud seh kisi route/midddleware mai nhi jaeyga, use agle par laijane kai liyai we have to push and that is next();

- request and response, next
(request mai sara data hota hai user ka like location, device info and many more whereas res ki help seh hum server seh response bej pateh hai user ko , next is lika a push so that req can be move forward after encountering a middleware to the next middleware or route).

- route parameters

- static routes
- dynamic routes - to make any route dynamic use : at the place from where u wnat to make it dynamic and to access the value use req.params.(variable)

bookstore/book/:username -> :username(variable) dynamic 

bookstore/book/sarthak -> static
bookstore/book/ayush
bookstore/book/chandu

- template engines -> ek markup style joh ki baad mai convert ho jaeygi html mai!! 

ejs has superpowers that html don't have because html is static

ejs, pug, handlears, jade

why we use ejs ? -> ejs very similar to html

ejs setup krnai kai liyai

1) EJS install 

npm i ejs

2) EJS configure

app.set("view engine", "ejs");

3) create views folder

4) usmei ejs file bnao

5) send ki jgah render kro

- static files -> images, stylesheet, frontend.js, ko setup krna

- to setup static files

1) make a folder name public
2) create three folders inside it, images, stylesheets, javascripts
3) configure the express static inside the script.js (app.use(express.static("./public"))) //path of static filess
4) understand the path

- https methode -> get and post
- error handling (error handling express.js do google search, everything is available there!!)







