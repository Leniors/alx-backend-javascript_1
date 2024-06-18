const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (url === '/students') {
        const databasePath = process.argv[2];

        res.setHeader('Content-Type', 'text/plain');

        countStudents(databasePath)
            .then((data) => {
                res.statusCode = 200;
                res.end(`This is the list of our students\n${data}`);
            })
            .catch((error) => {
                res.statusCode = 500;
                res.end(`This is the list of our students\n${error.message}`);
            });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

const PORT = 1245;
app.listen(PORT, () => {});

module.exports = app;