const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());

// Sample endpoint for chat messages (you may want to connect to a database)
let messages = []; 

app.post('/send-message', (req, res) => {
    messages.push(req.body);
    res.status(200).json({ status: 'Message received' });
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});