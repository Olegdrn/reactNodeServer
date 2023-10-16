const http = require('http');
const fs = require('fs')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const coneData = require("./coneData");
const { constrainedMemory } = require('process');



app.post('/api', (req, res) => {

  for (const el in req.body) {
    console.log(`${el}: ${req.body[el]}`);
  }
  const newData = {
    coneHeight: req.body.coneHeight,
    radius: req.body.radius,
    segmentNumbers: req.body.segmentNumbers
  }
  coneData.push(newData);

  fs.writeFile("serverData.js", coneData, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  })
});

app.get("/api", (req, res) => {
  res.json({
    coneHeight: `The cone height: ${coneData[coneData.length - 1].coneHeight} mm`,
    radius: `The cone raduis: ${coneData[coneData.length - 1].radius} mm`,
    segmentNumbers: `The segment numbers: ${coneData[coneData.length - 1].segmentNumbers} pcs`,
  })
});


const PORT = 5000;
const HOST = 'localhost';

//Если без express, то необходимо использовать http по шаблону ниже: 
// let server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
//   // if ()
//   res.end()
// })

app.listen(PORT, () => {
  console.log('express is listening on the port 5000')
})