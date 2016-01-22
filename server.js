var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;
var todos=[{
	id:1,
	description:"To-Do getting all todos",
	completed:false
},
{
id:2,
description:'To-Do get todo by Id',
completed:false	
}];

//start routing

app.get('/',function(req,res){

res.send('To Do Api version no 1');
});

//GET :/todos

app.get('/todos',function(req,res){
res.json(todos);
});

//Get:/todos/:id

app.get('/todos/:id',function(req,res){

var todoId=parseInt(req.params.id,10);

var matchedTodo;

todos.forEach(function(todo){
   
   if(todo.id === todoId)
   {
   	matchedTodo=todo;
   }
});

if(matchedTodo)
{
	res.json(matchedTodo);
}
else{
	res.status(404).send();
}
});

//listening Express on PORT

app.listen(PORT,function(){

console.log('express is listening on PORT ' + PORT +'!');
});