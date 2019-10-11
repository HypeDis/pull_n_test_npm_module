import chalk from 'chalk';
import path from 'path';
import { spawnSync } from 'child_process';
import { parseJson } from './parseJSON';
const rootDir = process.cwd();

export const testAll = (fileName: string): void => {
  if (!fileName) {
    console.error(chalk.red('Please include a file name'));
    return;
  }
  if (fileName === '!') {
    fileName = '';
  }

  const studentData = parseJson();
  studentData.forEach(({ firstName, lastName, folderName }) => {
    // TODO: differentiate between jest and mocha/chai
    const test = spawnSync(
      'npm',
      [
        'test',
        '--',
        '--noStackTrace',
        '--silent',
        '--forceExit',
        '--colors',
        `${fileName}`,
      ],
      { cwd: path.resolve(rootDir, folderName) },
    );
    console.log(chalk.bgBlueBright(chalk.white(`${firstName} ${lastName}`)));
    console.log(test.stderr.toString());
  });
};
