// Display a welcome message
console.log('Welcome to Holberton School, what is your name?');

// Set the encoding for standard input to be UTF-8
process.stdin.setEncoding('utf-8');

// Event listener for when data is received from standard input
process.stdin.on('data', (data) => {
    const name = data.trim(); // Remove any extra whitespace or newlines
    console.log(`Your name is: ${name}`);
    process.exit();
});

// Event listener for when the process is about to exit
process.on('exit', () => {
    console.log('This important software is now closing');
});