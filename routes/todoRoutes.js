const app = require('express').Router()
const todoModel = require('../models/todoitems')
const {createTodo, getTodos, deleteTodo} = require('./todoController.js')


app.post('/', createTodo )

app.get('/', getTodos )

app.put('/update/:id', async (req, res) => {
    try{
        
        const todo = await todoModel.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            detail: req.body.detail
        })
        res.send(todo)
    }
    catch(err){
        res.send(err)
    }
})

app.post('/delete/:id',deleteTodo)


module.exports = app