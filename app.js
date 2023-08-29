"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use(todos_1.default);
// app.use(express.urlencoded({extended:false}));
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express_1.default.json());
app.listen(3000, () => {
    console.log('listening');
});
