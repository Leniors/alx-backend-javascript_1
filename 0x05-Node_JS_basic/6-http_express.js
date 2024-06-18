const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Set the port to listen on
const PORT = 1245;

// Start the server
app.listen(PORT, () => {});

// Export the app
module.exports = app;