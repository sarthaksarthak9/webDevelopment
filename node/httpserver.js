const http = require('http');

const port = process.env.PORT||3000 ; //if u have set the env varibale then process.env.PORT otherwise
                                        //it will listen to port 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')  //by setting header to content-type, req is serve as html text
                                                //otherwise it get serve as plain text
                                                //main purpose to tell what kind of content server has send
    res.end("<h1>This is sarthak Negi</h1> <p> This is the way to rock the world");                                            

})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});
