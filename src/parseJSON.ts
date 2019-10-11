import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import { StudentInfo } from './generateJSON';

const rootDir = process.cwd();
const filePath = path.resolve(rootDir, 'studentData.json');

export const parseJson = (): StudentInfo[] => {
  let studentDataJSON;

  try {
    studentDataJSON = fs.readFileSync(filePath, { encoding: 'utf-8' });
  } catch (e) {
    console.error(chalk.red('Error reading studentData.json'));
    throw e;
  }
  const studentData: StudentInfo[] = JSON.parse(studentDataJSON);
  return studentData;
};
