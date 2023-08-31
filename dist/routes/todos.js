"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(200).json({ success: true });
});
router.delete('/todo/delete', (req, res) => {
    const body = req.body;
    let count = 0;
    todos.forEach(el => {
        if (el.id === body.id) {
            todos.splice(count, 1);
            res.status(200).json({ success: true });
        }
        count++;
    });
    res.status(400).json({ success: false });
});
router.put('/todo/update', (req, res) => {
    const body = req.body;
    todos.forEach(el => {
        if (el.id === body.id) {
            el.text = req.body.text;
            res.status(200).json({ success: true });
        }
    });
    res.status(400).json({ success: false });
});
exports.default = router;
