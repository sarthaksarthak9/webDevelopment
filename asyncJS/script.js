// async code ka main motive hota hai un case mai hota hai jaha humeh pta nhi hota ki answer (response) kitni 
// der mai aeyga , jab bhi response aa jaey toh uskai respect mai code run kr doh 

// async

console.log("1"); //sync
console.log("2"); //sync
setTimeout(function (){   //async
    console.log("3");
}, 0);
console.log("4"); //sync


// promises

var ans = new Promise(req, res) => {

    var n = Math.floor(Math.random() * 10);

    if(n < 5){
        return res();
    }
    else{
        return rej();
    }

}

ans
    .then(function(){
        console.log("below");
    })

    .catch(function(){
        console.log( "above")
    })