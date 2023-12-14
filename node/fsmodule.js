const fs = require('fs');



// fs.readFile('file.txt', "utf-8", (err, data)=>{ /*call back function*/
//     console.log(err/*print error if found*/, data /*show data in the file*/)
// })

// console.log("the end of the file");  /*here this will print before above fs.readFile, because of the way how 
//                                     computer process. The main idea is that let everything complete, then we 
//                                     focus over the fs.readFile (non-blocking I/O model)*/


/*To block I/O model we use fs.readFileSync*/

/*const a = fs.readFileSync("file.txt")
console.log(a.toString()) // readFileSync generate buffer data, to convert it into string we use this

console.log("this the end of file") */

const a = fs.writeFile("file.txt", "hi there sarthak this side", ()=>{
    console.log("succefully written")
})

console.log("this is the end of file") //the issue is same as above use writeFileSync for blocking