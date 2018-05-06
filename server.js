const express = require('express');
const app = express();


// app.js
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
  res.render('home', { msg: 'Hello World!' });
})

app.listen(3000, ()=>{
  console.log('PTG Museum on port 3000');
})
