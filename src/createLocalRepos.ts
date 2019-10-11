import fs from 'fs';
import { spawn } from 'child_process';
import chalk from 'chalk';
import path from 'path';
import { StudentInfo } from './generateJSON';

const rootDir = process.cwd();
const filePath = path.resolve(rootDir, 'studentData.json');

export const createLocalRepos = (): void => {
  console.log(chalk.green('Creating local repos...'));

  let studentDataJSON;

  try {
    studentDataJSON = fs.readFileSync(filePath, { encoding: 'utf-8' });
  } catch (e) {
    throw e;
  }

  const studentData: StudentInfo[] = JSON.parse(studentDataJSON);
  studentData.forEach(({ firstName, lastName, githubRepo, folderName }) => {
    const mkdir = spawn('mkdir', [folderName]);
    mkdir.on('close', code => {
      if (code === 0) {
        const gitClone = spawn('git', ['clone', githubRepo, folderName]);
        gitClone.on('close', code => {
          if (code !== 0) {
            console.error(
              chalk.red(`error creating repo for ${firstName} ${lastName}`),
            );
          }
        });
      } else {
        console.error(
          chalk.red('error creating folder for ', firstName, ' ', lastName),
        );
      }
    });
  });
  console.log('Repos created');
};