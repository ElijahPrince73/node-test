const express = require('express');

var app = express();

app.get('/' , (req , res)=>{
res.status(404).send({
  error:'Page Not Found',
  name:'Todo app v1.0'
});
});

app.get('/users' , (req ,res) =>{
  res.send({
    name:'Ana',
    age:25
  },{
    name:'Dakota',
    age:26
  }

)
})

app.listen(3000);

module.exports.app = app;
