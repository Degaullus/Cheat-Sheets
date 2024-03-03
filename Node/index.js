console.log("hello Node!"); 

function sayHi() {
    console.log("Hello from the function")
}
sayHi(); 

/* terminal : node name of the file --) you console log your code*/

const os = require('node:os'); 

console.log(os); /* get acces to a big object. Then you can access to specific stuffs like cpus */

console.log(os.cpus()); /* get access to cpus */

const myPc = {
    os: os.platform(), 
    'total memory': os.totalmem(), 
    'free memory': os.freemem(), 
    cpus: os.cpus(), 
}; 

console.log(myPc); 
/* so you get access to everything inside the local computer. Like steam will do before you get a new game. */

            const os = require("node:os"); /* is like an importing OS from nodeOS */
            /* you can also use import os from "node:os" but need module JS */

//"globals" is on the top. 

// process --) infos about the host machine. 
//require() --) allows us  to import modules
//__direname --) shows the current directory path as a string
//__filename --) tells the current directory path + filename beeing executate. 
//modules.exports --) how to export thing from a file (like export default in react)
// so to import smthing, use require. To export, use module.export. 

        //what is a module ? every JS files IS A MODULE. 

const chicken = require('./utils'); /* with this, you import module. We have A VARIABLE WHO CAN HAVE EVERY NAME AND REQUIRE THE MODULE. IT SHOWS THE STRING "I am a module"  */

console.log(chicken); /* in your terminal look */

//now calling the utils : if rainbow function inside, will  be the function ow.

//////////////////////////
//multiple function. 

const {addRainbows, addDbleRainbows, addMoreRainbows} = require("utils"); 


console.log(addRainbows); 
console.log(addMOreRainbows); 
console.log(addDbleRainbows); 


/////////////////////////////////////////
////////////////////////////////////////


//go in new rep
npm init -yield
//creating a json package. In the new file createyour js. It gives a small script. helping. 

const os = require("node:os")

console.log(os); 
//CHECK IF YOU ARE IN YOUR PROJECT. 

//you can modify then your script/ 
"scripts" : { 
    "start" : "node index.js"// will open the file we created. 
},

//in terminal : IF START --) npm start // if no start NPM RUN. 

//terminal      npm i nodemon -D 
//install package that run everytime. Just for dev purposes? so can go in -D dev dependancy. Will add it in your package json. 
//but now chang the script to use this 

"scripts" : { 
    "start" : "node index.js"// will open the file we created. 
    "dev": "nodemon index.js"//START COMMAND IS ALWAYS NODE than NAME.JS 
},

---) npm start


////////////////////////////////////////////////

//READ FILE METHOD  fs.readFile(path[,options], callback)
//in a file somewher 
some text in text file 

//index.js
const fs =require("fs"); 

fs.readFile('file.txt', 'utf8', (err, data) => { //call back has to start with err. 
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
}); 

//run dev : will be read. 



//WRITE A TEXT INTO A FILE.
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

//make your run dev. We created a text inside a text !!!!! 

//////////////
//CREATE A FOLDER

fs.mkdir("someFolder", (err) => {
    if (err) {
        console.log(err); 
        return
    }
    console.log('text would be directory was created. ')
}); 

///////////////
//CHECK IF FILE:DIRECTORY EXISTS.
fs.access('file.text', fs.constants.F_OK, (err) => {
    if (err) {
        console.log(err); 
        return
    }
    console.log('file exist! ')
});   