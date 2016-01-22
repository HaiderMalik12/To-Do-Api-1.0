var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;


//start routing

app.get('/',function(req,res){

res.send('To Do Api version no 1');
});


//listening Express on PORT

app.listen(PORT,function(){

console.log('express is listening on PORT ' + PORT +'!');
});