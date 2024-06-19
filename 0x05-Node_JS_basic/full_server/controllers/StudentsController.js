// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

class StudentsController {
    static async getAllStudents(req, res) {
        const databasePath = process.argv[2];
        try {
            const students = await readDatabase(databasePath);
            let output = 'This is the list of our students\n';
            const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

            fields.forEach((field) => {
                output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
            });

            res.status(200).send(output.trim());
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        const databasePath = process.argv[2];

        if (!['CS', 'SWE'].includes(major)) {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(databasePath);
            const fieldStudents = students[major];

            if (fieldStudents) {
                res.status(200).send(`List: ${fieldStudents.join(', ')}`);
            } else {
                res.status(200).send('List: ');
            }
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;