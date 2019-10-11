import { spawnSync } from 'child_process';
import chalk from 'chalk';
import path from 'path';
import { parseJson } from './parseJSON';

export const pullAllRepos = (): void => {
  console.log('Pulling latest repos from github...');

  const rootDir = process.cwd();
  const studentData = parseJson();

  studentData.forEach(({ firstName, lastName, folderName }, idx) => {
    const stretchDir = path.resolve(rootDir, folderName);
    const gitPull = spawnSync('git', ['pull', 'origin', 'master'], {
      cwd: stretchDir,
    });

    console.log(chalk.bgBlueBright(`${firstName} ${lastName}`));
    console.log(gitPull.stdout.toString());
    console.log(gitPull.stderr.toString());
  });
};
