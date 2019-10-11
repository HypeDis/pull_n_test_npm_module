import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

export interface StudentInfo {
  firstName: string;
  lastName: string;
  folderName: string;
  githubRepo: string;
}

export const parseCSV = (filePath: string): StudentInfo[] => {
  let studentDataFromCSV: string[][];
  try {
    studentDataFromCSV = fs
      .readFileSync(filePath, { encoding: 'utf-8' })
      .replace(/\r/g, '')
      .split('\n')
      .map(row => row.split(','));
  } catch (e) {
    console.error(chalk.red('Could not find file'));
    console.log(chalk.red(e));
    throw e;
  }
  const allStudentsInfo = studentDataFromCSV.map(
    ([firstName, lastName, gitHandle, repoName]) => {
      firstName = firstName.trim();
      lastName = lastName.trim();
      return {
        firstName,
        lastName,
        folderName: `${firstName}_${lastName}`,
        githubRepo: `git@github.com:${gitHandle}/${repoName}.git`,
      };
    },
  );
  return allStudentsInfo;
};

export const generateJSONFile = (filePath: string): void => {
  const parsedData = parseCSV(filePath);
  const rootDir = process.cwd();
  try {
    console.log('writing file');
    fs.writeFileSync(
      path.resolve(rootDir, 'studentData.json'),
      JSON.stringify(parsedData),
    );
  } catch (e) {
    throw e;
  }
  console.log('studentData.json created');
};
