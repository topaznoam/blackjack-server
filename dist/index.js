"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});
app.post('/check', (req, res) => {
    console.log(req.body); // Should log { message: 'hello check' }
    res.send('Message received');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
