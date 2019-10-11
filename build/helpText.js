"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpText = " \n\nLIST OF COMMANDS:\n\n--init <filepath>\nCreate the studentData.json from a csv file.\nThe csv should be formatted as\nfirstName, lastName, githubHandle, repoName\n\n--createAll\nCreate the folders and does an initial pull for each repo.\n\n--pullAll\nrun \"git pull origin master on every folder\"\n\n--testAll <filename>\nrun \"npm test <filename>\" for each folder.\nUse '!' for file name to bypass file name validation";
