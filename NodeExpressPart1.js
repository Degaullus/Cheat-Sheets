//creating new project/Go where you need
npm init -yeld  //create a new json package. 
npm install nodemon -D 

//create your server file  
touch indexedDB.js 
//or
touch server.js .env .gitignore

const os = require("node:os")

//change your scripts
"scripts": {
    "start": "node server.js"
    "dev": "nodemon server.js"
}
//run with npm run "command name"

//basic structure : 
const express = require("express")//importing. OR : 
const express = require(`./utils`)

const app=express()//create an application object. 
const PORT = process.env.PORT || 4000 //create a var to fix you rport. 

app.use(express.json()) //middelware in use. 
/* middleware : 
- req : request obejct
- res : response object
- next : function that passes req/res */

app.listen(PORT, () => console.log(`Listening on port ${PORT}`)) //Server Listener. 

/* route : determine teh server response to an incoming request. uses on of the following method : 
- .all: req any method
- .get: get request
- .post: post request
- .put: put request
- .delete: delete request
all of this function take 2 arguments : -endPoint / Controller : means function taking req/res as argument
exemple: */
app.get("/endPoint", (req, res) => {
    res.send("The Response")
})

//what kind of req ? 
/* 
- req.header : object with the header
- req.params : object with any route params
- req.query : object key value pair from a url
- req.body : obejct key value pair
- req.method : as string */

//what kind of res? 
/* 
res.send : send html/json or text
res.json : send a JS object 
res.render : render an html response
 */




////////////////////////////////////////////////////////////////
//SOME METHOD (fs.)

//Read File Method 
//write a text somewhere. . Go back in your index.js
const fs = require("fs") //import

fs.readFile(`file.text`, `utf8`, (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
})
//if run dev, will be read; 

//Write text into file (writeToFile())
function writeToFile() {
    fs.writeFile("file.txt", "some text", (err) => {
        if (err) {
            console.log(err); 
            return
        }
        console.log('text would be written. ')
    })
    }

    writeToFile(); 

//Create a folder
        fs.mkdir("someFolder", (err) => {
            if (err) {
                console.log(err); 
                return
            }
            console.log('text would be directory was created. ')
        }); 

//Check if file exist 
fs.access('file.text', fs.constants.F_OK, (err) => {
    if (err) {
        console.log(err); 
        return
    }
    console.log('file exist! ')
});   