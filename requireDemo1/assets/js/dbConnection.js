
var mongoose = require('mongoose');

function dbConnection(){
mongoose.connect('mongodb://localhost/test3');

var TodoSchema = new mongoose.Schema({
	name:String,
	completed:Boolean,
	note:String,
	updated_at:{type:Date,default: Date.now},
});

var Todo = mongoose.model('Todo',TodoSchema);

var todo = new Todo({name:'Master Nodejs',completed:true,note:'getting there...'})
todo.save(function(err) {
	if(err)
		console.log(err)
	else
		console.log(todo);
});

Todo.find(function (err, todos) {
  if (err) return console.error(err);
  console.log(todos)
});
}
exports.dbConnection = dbConnection;