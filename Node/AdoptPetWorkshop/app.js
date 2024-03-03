//exporting section. 
const express = require('express')
const app = express()
const port = 8000 //needto define the port
const petList = require("./petList") //importing petJS


app.get('/', (req, res) => { //defining the route for '/' 
  res.send('<h1>Adopt a pet</h1> <p>Browse</p> <ul> <li>Dogs</li> <li>Cats</li> <li>Rabbits</li> </ul> '); 
})

app.get("/animals/:pet_type", (req, res) => {
    const petType = pets.dogs.map((pet, index) => pet === req.params
    [index]); 
    res.send(petType)
    
}); 


//starting the server. 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})