//Create your server.
const {mkdir} = require("fs"); 
const http = require("http"); //importing
const {stringify} = require("querystring"); 

const server = http.createServer((req.res) => {
    res.writeHead(200); 
    res.end("Hello Node!")
})//server is here. Need to listen. 

server.listen(8080, () => {
    console.log("server is listening on port 8080")
})
