
//HOW to create Data base with elephant and connect it with our SERVER. 

//nb rows : IMPORTANT, cause if not, you get everything. 

//SETUP
npm init -y
touch index.js && npm i nodemon express
//change your scripts
"scripts": 
    "start" : "node index.js", 
    "dev": "nodemon index.js"

npm install nodemon -D //install as dependancy. Will replace

npm i pg //if you need/want to create connection with your server. pg (PG for intercation with post greSQL)

npm i dotenv //create a .env after to hide your security. see 1) 


///////////////////////////////////////////////////////////////////
//importing section. 
const express = require('express')//need
const app = express(); //need
app.use(express.json()); //need
const { Pool } = require("pg");//for connection, create new pool. Require PG 
require ("dotenv").config(); // this take what is inside the .env. It's taking all you secret back. 

//defining the server port. 
const PORT = process.envPORT || 8080;

/* 1) HIDE AND MOVE IN .env
// (this was hide for security reason) CREATE THE CONNECTION. Create a new Pool instance wth my elephant SQL. possible with "PG". COPY PASTE 
const pool = new Pool ({
    user: 'ldzxnkip',
    host: 'cornelius.db.elephantsql.com',
    database: 'ldzxnkip',
    password: 'GrMJCR4nwwH4uX9mAt__q2jAFiRJBAbz', 
    port: 5432, // default PostgreSQL port
  });
 */

  const pool = new Pool(); 

/// HOW TO SEE RESULTS ? Change the URL.

  //define my routes/starting the server. Basic one. 
  app.get("/", (req, res) => {
    res.send("Welcolm to my API")
})

//GET ALL USERS. take on the url. 
app.get("/api/users", (req, res) => {
    pool 
    .query("SELECT * FROM users")
    .then((data) => res.json(data.rows))
    .catch((e) => {
        console.log(e); 
        res.sendStatus(500); 
    });
});
 
//get one user with the ID. 
app.get("/api/users/:id", (req, res) => {
    const {id} = req.params; 
    pool
    .query("SELECT * FROM USERS WHERE id=$1", [id])//hidding information. comparing. beCAUSE backstick allow injection from outside. DONT USE BACKSITE IN QUERY. parameterized query
    .then((data) => res.json(data.rows))
    .catch((e) => {
        console.log(e); 
        res.sendStatus(500); 
    });
})

//create new user. Use Postman. Create with http and Raw. add a new object "robin". use the post method. And after it if you look GET, you have robin. In elefant, go to browser and take a look if robin is here aswell. 
app.post("/api/users", (req, res) => {
    const { first_name, last_name, age, active } = req.body;
    pool
      .query(
        "INSERT INTO users (first_name, last_name, age, active ) VALUES ($1, $2, $3, $4) RETURNING *",
        [first_name, last_name, age, active ]
      )
      .then((data) => res.json(data.rows))
      .catch((e) => {
        console.log(e);
        res.sendStatus(500);
      });
  });

  //put update. Use with postman. 
  app.put("/api/users/:id", (req, res) => {
    const { first_name, last_name, age, active} = req.body; 
    const {id} = req.params
    pool
    .query('UPDATE users SET first_name = $1, last_name = $2,  age = $3, active = $4 WHERE id = $5',[first_name, last_name, age, active, id], )
    .then((data) => res.json(data.rows))
      .catch((e) => {
        console.log(e);
        res.sendStatus(500);
      });
  })





app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})