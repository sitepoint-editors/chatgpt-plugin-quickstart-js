const express = require('express');
const router = express.Router();

let todos = [
    { id: 1, task: 'Wake up' },
    { id: 2, task: 'Grab a brush'},
    { id: 3, task: 'Put a little makeup'},
    { id: 4, task: 'Build a Chat Plugin'}
]; // placeholder todos

let currentId = 5; // to assign unique ids to new todos

getTodos = async function(req, res) {
    res.json(todos);
}

addTodo = async function(req, res) {
    const { task } = req.body;
    const newTodo = { id: currentId, task };
    todos.push(newTodo);
    currentId++;
    res.json(newTodo);
}

removeTodo = async function(req, res) {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== Number(id));
    res.json({ "message" : "Todo successfully deleted" });
}

router.get('/', getTodos);
router.post('/', addTodo);
router.delete('/:id', removeTodo);

module.exports = router;