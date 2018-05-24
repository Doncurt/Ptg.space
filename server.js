const express = require('express');
const app = express();


// app.js
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', { msg: 'Hello World!' });
})

app.get('/aknowledgements',(req,res)=>{
  res.render('acknowledgements');
})
const names =[
  {name:"hanah"},
  {name:"donovan"},
  {name:"rocky"},
  {name:"bobby"}
]
app.get('/wiki',(req,res)=>{
  console.log(req.query);
  term =req.query.search_term;
  res.render('wiki',{names});
})
app.get('/deliverables',(req,res)=>{
  res.render('deliverables');
})
app.listen(process.env.PORT || 3000, ()=>{
  console.log('PTG Museum on port 3000');
})
