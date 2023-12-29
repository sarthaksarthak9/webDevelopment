<!-- 

// sync and async kya hota h?

sync ka matlab mtlb ek kai baad dushra hoga, jab tak ek command complete na ho toh dushra shuru nhi hoga
async ka matlab shareh kaam ek saat shuru kr doh , jis ka answer phelai aa jaey uska answer report krdoh

Kaisai pta chlega ki hun async code likh rhe hai yah sync code ?
-->

    {
        setTimeout
        setInterval
        promises
        fetch
        axios
        XMLHttpRequest
    }

    1) setTimeout => setTimeout(callback, timeinms)

    ------                          
    setTimeout(function(){}, 2000)
    ------


 <!--

 // js is not asynchronous and it is singlethread
 
 
 Joh bhi main stack par hota hai voh execution krtah hai and joh bhi side stack par hota hai voh behind the scene processing kr sktah hai aur jab processing complete ho jaey toh usseh main stack mai laayaja sktah h ... jab main stack empty hotah hai phir check kiya jatah hai ki side stack par koi process complete ho a yah nhi ...

run this in js file and observe output
-->

console.log("1");
console.log("2");
setTimeout(function (){
    console.log("3");
}, 0);
console.log("4");



 <!-- event loop -> it communicate between and perform task between main stack and side stack. Like it check whether main stack is empty or it check status of process in side track or it shift process from side track to main track if status is completed ... 
 
 // callbacks
 -->


{
    setTimeout
    setInterval
    promises
    fetch
    axios
    XMLHttpRequest
}

<!-- above things used to send req and to write async code and when the process complete and recieve answer we received it from the following
-->

{
    then catch
    callback function
    async await
}

<!-- 
callback function 

it run after the completion of aysnc code
-->

<!-- 
promises 

it is a function that run in future and it had 3 status for the code ... 1) resolve 2) rejected 3) pending

// you can test below code in cheome 
 -->

var ans = new Promise(req, res)=>{

    if(true){
        return res();
    }
    else{
        return rej();
    }

}

ans
    .then(function(){
        console.log("hogaya);
    })

    .catch(function(){
        console.log( "nhi hua")
    })


<!-- aysnc and await 

// done

-->

<!-- concurrency and parallelism

// concurrency -> js mai sync and async code ek sath proceed hota hai toh concurrency

// parallelism -> focus jdah krtah h diff processors and unke core par kaam ko chalenai parr

// throttling -> agar no of execution ko control krna ho (no of calls of code ko decrease kr skteh h)

 -->

