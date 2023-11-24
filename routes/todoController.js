const todoModel = require('../models/todoitems')


exports.createTodo = async (request, response) => {
    try{ 
        console.log(request.body)
        const todo = await new todoModel({
            title: request.body.title,
            detail: request.body.detail
        })
        await todo.save()
        console.log(todo)
        response.status(200).send(todo)
    }
    catch(error){
        console.log('error',error)
        response.status(500).send(error)
    }
}

exports.getTodos = async (req, res) => {
    try{
        const todo = await todoModel.find({}).exec()
        res.send(todo)
    }
    catch(err){
        res.send(err)
    }
}

exports.deleteTodo= async(req,res) => {
    try{
        await todoModel.findByIdAndDelete({_id:req.params.id}).exec()
        res.send('item deleted')
    }
    catch(err){
        console.log(err)
        res.send(err)
    }

}