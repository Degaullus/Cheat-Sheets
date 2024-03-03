//create a server//own API

const { mkdir } = require("fs");
const http = require("http"); //importing 
const { stringify } = require("querystring");

//entweder 
/* const myFunc = () => {}
const server = myFunc */

//or 

const server = http.createServer((req.res) => {//request and response ALWAYS in this order. They are chicken.
    res.writeHead(200); 
    res.end("Hello Node!")
})
//the server is now here but we need to listen 
//when you go on a page, you make a req. And you get a response. But when you make a form, you make a post request. 
server.listen(8080, () => { //if someone goes there, then respond this above. 
    console.log("OUr server is listening on port 8080")
})

//npm run dev/ but you need a Json for it. 


//he user aks for a port, we send it back responses. But we also have access to request. 


//////////////////////////////////////////////////////////////
//NB: if you console log (req) = we get a big object. Some stuff are extractable.

const unpacked = {
    url : req.url,
    method : req.method, 
    headers: req.headers
}

const server = http.createServer((req.res) => {
    res.writeHead(200, "content-Type", "application/json"); 
    res.end(JSON.stringify)
})

//in your terminal : you get the infos you are looking for. like the method, and the header (connections, ect). 
//you can add actions


const server = http.createServer((req.res) => {
if(req.url === "/") { //if request url, if its case that user is in home page
    res.writeHead(200,"content-Type", "text/plain")
    res.write("Welcome to the homepage")
} else if (req.url === "chicken") { 
    res.writeHead(200,"content-Type", "text/plain")
    res.write("Welcome to the homepage")
} else {
    res.writeHead(404, "conten-type", "text/plain")
    res.write("404 errors")
}
res.end(); //need to close.
)


//like this you created a small server. 
server.listen(8080, () => { //if someone gies there, then respond this above. 
    console.log("OUr server is listening on port 8080")
})

////////////////////////////////////////////////////////////////////

//how to 
//1) new dir place 
//2) new directory 
mkdir "name"
//3) navigate into 
cd "name"
//4) 
npm init -y
touch index.js
//5) go to the json to specify what you want to have (adjust your scripts) Start should always be "node name.js"

npm i nodemon -D //so that you don't have to reload everytime.


/////////////////////////////////////////////////////////////////
//EXPRESS
const exress = require('express')

const app = express() // app is gonna be the result of running express function.

const PORT =  process.env.PORT Or symbole 8080
//look the documentation. 
//means, if you have this port, use it. If not 80 80

app.get("/", (req, res) => {
    res.send("Welcome to my server")
}); 

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})

//now run dev. 
//////////////////////////////////////////
//NOODLES API 
const exress = require('express')//initailisae express like variable
const PORT =  process.env.PORT Or symbole 8080

const flavors = [ //creating an array 
    {
        id: 1, 
        name: "miso"; 
    }, 
    {
        id: 2, 
        name: "kimchi"
    }, 
    {
        id: 3, 
        name: chicken, 
    }, 
]//now we have a new aray 


app.get("/", (req, res) => {
    res.send("Welcome to my NOODLES API")
}); //on the base, send back this message 

app.get("/api/noodles", (req, res) => { //write /API is a convention. Has to be there. 
    res.send(flavors) //when you get a request, send back this array 
})

app.get("/api/noodle/:id"), (req, res) => {//:id because I want something dynamic. 
   const flavors = flavors.find(flavor => flavor.id === req.params.id)  //params alreday exists. You can alos use a filter method. 
   if (flavor) {
   res.send(flavor)
   } else {
    res.status(404)send("we don't have that flavor")
   } //express gives a 200 default 
}) // when we get this request, look flavor, send back that flavor 

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
}) // and listen to this one. 

//you will then get the number 1. The differnece with the front end is that you won't get multiple endpoints. 

// IN the URL after ? get acces to this. If you console log 
console.log(req.query); 
//whatever I type in the URL, I can acces them. Let's use them. 


// for everything that is not declared, it goes to homepage. 
app.all("*", (req, res) => {
    res.redirect("/"); 
}); 
////////////////////////////////////////////
//let's us post 

app.post("/",  (req, res) => {
    res.redirect("/"); 
}); 


//the browser can just GET request but not POST. To post or send, you need a front end a post man
in postman. select body for exemple. then take JSON 
and create an object part fe : 
{
    id: "5"
    flavor: "arrabiata"
    country: "utaly"
}
// but we need to specify what to do with this. 

application.use(express.json()) //place in import to tell that you will have Json in your app. ITS MANDATORY. if you console log, its there. 

//take your post again app.post("/",  (req, res) => {
    app.post("/",  (req, res) => {
        const newflavor : {
            id: flavors.lenght + 1, 
            flavor: req.body.flavor, 
            country: req.body.country, 
        }; 
        flavors.push(newFlavor); //adding it to the array. 
        res.status(201).send("new ressource created")
    }); 

    //creating a new slot in the array. You can see in the console loging. 


/////////////////////////////////////////////////
//DELETE
//1) check if exist
//2) if exist, delete the flavor from the array
//3) display the deleted flavor

app.delete ("/api/noodles/:id", (req, res) =>const flavors = flavors.find(flavor => flavors.find === Number(req.params.id)) /// locate where you wanna go. You have the ID so you want to find the flavor 

if(!flavor) return res.status(404).send("no such flavors") // if no, return message 

const index = flavor.indexO(flavor)//give me the index of the object I was looking for. 

flavors.splice(index, 1);// now you have the index, take the splice methode. 

res.status(200).send(send"flavor deleted")//give back a status. 
console.log


/////////////////////////////////////////////////
//PUT request 

app.delete ("/api/noodles/:id", (req, res) =>
const flavor = flavors.find((flavor) => flavors.id === Number(req.params.id)) 

if(!flavor) return res.status(404).send("no such flavors") 

const index = flavor.indexO(flavor)
flavors.splice(index, 1);//

res.status(200).send(send"flavor deleted")
