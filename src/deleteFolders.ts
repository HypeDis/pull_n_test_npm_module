import { spawn } from 'child_process';
import chalk from 'chalk';
import path from 'path';
import { parseJson } from './parseJSON';

export const deleteFolders = (): void => {
  console.log('Deleting all folders...');

  const studentData = parseJson();

  studentData.forEach(({ folderName }) => {
    const folderDir = path.resolve(process.cwd(), folderName);
    const deleteFolder = spawn('rm', ['-rf', folderDir]);
    deleteFolder.on('close', code => {
      if (code !== 0) {
        console.log(chalk.red('error removing ', folderDir));
      }
    });
  });
  console.log('Folders deleted');
};
