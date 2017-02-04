const express = require('express');

var app = express();

app.get('/' , (res , req)=>{
res.send('Hello World');
});

app.listen(3000);
