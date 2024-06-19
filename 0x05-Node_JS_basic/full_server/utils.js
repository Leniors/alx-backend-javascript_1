// full_server/utils.js
import fs from 'fs/promises';

export async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
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

        return students
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}