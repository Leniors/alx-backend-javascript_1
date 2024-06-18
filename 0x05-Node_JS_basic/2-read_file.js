const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.trim().split('\n');

        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }

        const students = {};
        let totalStudents = 0;

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
                const [firstname, lastname, age, field] = line.split(',');

                if (!students[field]) {
                    students[field] = [];
                }

                students[field].push(firstname);
                totalStudents++;
            }
        }

        console.log(`Number of students: ${totalStudents}`);

        for (const field in students) {
            const count = students[field].length;
            const names = students[field].join(', ');
            console.log(`Number of students in ${field}: ${count}. List: ${names}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;