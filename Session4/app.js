const express = require('express')
const html = require('html')
const start = express()
const port = 3000
const fs = require('fs')
start.get('/', (req, res) => {
    res.sendFile(__dirname + '/' +'index.html');
});
start.get("/data", (req, res) => {
    res.sendFile(__dirname + '/' +'logic.js');
});
start.get("/getdata", (req, res) => {
    fs.readFile(__dirname + '/' + 'details.json', (err, data) => {
        res.end(data);
    });
});
start.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
