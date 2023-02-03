const express = require('express')
const html = require('html')
const sqlite3 = require('sqlite3');
const start = express();
const port = 3000


let db = new sqlite3.Database('./details.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

start.get('/', (req, res) => {
    res.sendFile(__dirname + '/' +'index.html');
});
start.get("/data", (req, res) => {
    res.sendFile(__dirname + '/' +'logic.js');
});

start.get("/details/:email", (req, res, next) => {
    var params = [req.params.id]
    db.get(`SELECT * FROM person_details where email = ?`, [req.params.email], (err, data) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.status(200).json(data);
        console.log(data);
      });
});
start.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
