"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var createLocalRepos_1 = require("./createLocalRepos");
var deleteFolders_1 = require("./deleteFolders");
var generateJSON_1 = require("./generateJSON");
var pullRepos_1 = require("./pullRepos");
var testStretches_1 = require("./testStretches");
var helpText_1 = require("./helpText");
var runSelectedScript = function (flag, args) {
    switch (flag) {
        case '--init':
            var filePath = args[0];
            if (!filePath) {
                console.error(chalk_1.default.red('File location not provided'));
                break;
            }
            generateJSON_1.generateJSONFile(filePath);
            break;
        case '--createAll':
            var requestType = args[0];
            createLocalRepos_1.createLocalRepos(requestType);
            break;
        case '--pullAll':
            pullRepos_1.pullAllRepos();
            break;
        case '--testAll':
            var fileName = args[0];
            testStretches_1.testAll(fileName);
            break;
        case '--deleteAll':
            // add a prompt here
            deleteFolders_1.deleteFolders();
            break;
        case '--help':
            console.log(helpText_1.helpText);
            break;
        default:
            // add help flag
            console.error(chalk_1.default.red('No such flag'));
            return;
    }
};
exports.main = function (argv) {
    var _a = argv.slice(2), flag = _a[0], args = _a.slice(1);
    runSelectedScript(flag, args);
};
// main(process.argv);
