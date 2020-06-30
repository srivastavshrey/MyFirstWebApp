const db = require('../config/mongoose');
const Task = require('../models/task');
//controller to fetch data
module.exports.home = function(req,res){
    Task.find({},function(err,task)
    {if(err){console.log("Error in fetching contacts from db");
return;}

return res.render('home',{
task_list: task});
    });
    }
//controller to store data
module.exports.store = function(req,res){
    Task.create({
        task: req.body.task,
        date: req.body.date,
        type: req.body.type
       },function(err,newTask){
           if(err){ console.log('Error in storing task');
           return;}
           console.log('********',newTask);
           return res.redirect('back');
       });
}
