const express = require('express');
const countStudents = require('./3-read_file_async');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Define a route for the "/students" URL
app.get('/students', async (req, res) => {
    const databasePath = process.argv[2];

    try {
        const data = await countStudents(databasePath);
        res.status(200).send(`This is the list of our students\n${data}`);
    } catch (error) {
        res.status(500).send(`This is the list of our students\n${error.message}`);
    }
});

// Set the port to listen on
const PORT = 1245;

// Start the server
app.listen(PORT, () => {});

// Export the app
module.exports = app;