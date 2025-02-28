// Create web server
const express = require('express');
const app = express();

// Create a variable to store comments
const comments = [];

// Create a route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a route to post a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start the server
app.listen(4001, () => {
    console.log('Server is running on http://localhost:4001');
});