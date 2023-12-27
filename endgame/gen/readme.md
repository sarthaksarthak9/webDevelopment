<!-- new changes we see here!!
    app.get -> router.get
    npx nodemon filename -> npx nodemon
-->

<!-- 
MongoDb
    haar naye app ka data store hoga storage mein, par usey directly rakhne ki jagah ek container main rakege, us container mein sirf us app ka data aeyga !!

    Models -> division of data according to there category in large group of data, keeping it seprated from other data..done with the help of models

    models(code)  ==> collection(data base) (creation of models lead to formation of collection in database).
    
    schema(code)  ==> documents(db)
    ek app ka pora data ==> db
    
    ek app kai data mai variety of data hota hai, sub category ko collection bolteh hai
    collection is like all user data in a variety, if we talk about single user then that is document.
-->

<!--  -->

- steps to setup database

1) install mongodb
2) install mongoose
<!-- npm i mongoose -->
3) require and setup connection
4) make schema 
5) create model and export


- steps to create session

1) initialize it in app.js
2) create it in routes -> index.js

create -> req.session.koibhinaam = koibhivalue;
read -> req.session.koibhinaam
delete -> req.session.destroy

// Lets setup cookie now

1) res.cookie("name", value);
2) cookie reading -> req.cookies.name
3) cookie delete -> res.clearCookie("name")


