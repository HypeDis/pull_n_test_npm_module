import chalk from 'chalk';

import { createLocalRepos } from './createLocalRepos';
import { deleteFolders } from './deleteFolders';
import { generateJSONFile } from './generateJSON';
import { pullAllRepos } from './pullRepos';
import { testAll } from './testStretches';
import { helpText } from './helpText';

const runSelectedScript = (flag: string, args: string[]): void => {
  switch (flag) {
    case '--init':
      const filePath = args[0];
      if (!filePath) {
        console.error(chalk.red('File location not provided'));
        break;
      }
      generateJSONFile(filePath);
      break;
    case '--createAll':
      createLocalRepos();
      break;
    case '--pullAll':
      pullAllRepos();
      break;
    case '--testAll':
      const fileName = args[0];
      testAll(fileName);
      break;
    case '--deleteAll':
      // add a prompt here
      deleteFolders();
      break;
    case '--help':
      console.log(helpText);
      break;
    default:
      // add help flag
      console.error(chalk.red('No such flag'));
      return;
  }
};

export const main = (argv: string[]): void => {
  const [flag, ...args] = argv.slice(2);
  runSelectedScript(flag, args);
};

// main(process.argv);
