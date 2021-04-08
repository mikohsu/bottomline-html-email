//Heroku server
const app = require('express')();
// http server usually created automatically by express when just using "app"
// the express app object is then passed into the http server function
const http = require('http').Server(app);

const PORT = process.env.PORT || 80;


app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/BLM-Newsletter.html');
})

// app.get('/style.css', (req, res)=>{
//   res.sendFile(__dirname + '/style.css');
// })


http.listen(PORT, '0.0.0.0', ()=>{
  console.log('listening on port ' + PORT);
})
