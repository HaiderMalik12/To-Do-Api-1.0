var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var PORT=process.env.PORT || 3000;
var todos=[];
var todoNextId=1;
//apply middleware

app.use(bodyParser.json());

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

// POST /todos

app.post('/todos',function(req,res){
    var body=req.body;
   
    body.id=todoNextId++;

    todos.push(body);

    res.json(body);


});
//listening Express on PORT

app.listen(PORT,function(){

console.log('express is listening on PORT ' + PORT +'!');
});