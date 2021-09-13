const express = require('express');
const app = express();
const port = 4000;

let t = new Date();
let d = t.getDay();
let h= t.getHours();

app.get('/', (req, res,next) => {
  if (d!== (0 && 6) && (h>=9 && h<=17)){
     res.sendFile(__dirname + '/public/home.html')}
  else {res.sendFile(__dirname + '/public/orservice.html')}
  });
 
 app.use(express.static(__dirname + '/public'));
app.listen(port, (err) => {
  if (err) { console.log(err)};
       console.log(`the server is running on port ${port}`);  
});