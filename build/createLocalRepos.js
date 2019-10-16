"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var child_process_1 = require("child_process");
var chalk_1 = __importDefault(require("chalk"));
var path_1 = __importDefault(require("path"));
var rootDir = process.cwd();
var filePath = path_1.default.resolve(rootDir, 'studentData.json');
exports.createLocalRepos = function (requestType) {
    console.log(chalk_1.default.green('Creating local repos...'));
    var studentDataJSON;
    try {
        studentDataJSON = fs_1.default.readFileSync(filePath, { encoding: 'utf-8' });
    }
    catch (e) {
        throw e;
    }
    var studentData = JSON.parse(studentDataJSON);
    studentData.forEach(function (_a) {
        var firstName = _a.firstName, lastName = _a.lastName, githubRepoSSH = _a.githubRepoSSH, githubRepoHTTPS = _a.githubRepoHTTPS, folderName = _a.folderName;
        var mkdir = child_process_1.spawn('mkdir', [folderName]);
        var githubRepo = requestType && requestType.toLowerCase() === 'https'
            ? githubRepoHTTPS
            : githubRepoSSH;
        console.log(githubRepo);
        mkdir.on('close', function (code) {
            // TODO: check if directory exists and git repo does not
            console.log('mkdir exit code', code);
            if (code === 0) {
                var gitClone = child_process_1.spawn('git', ['clone', githubRepo, folderName]);
                gitClone.on('close', function (code) {
                    if (code !== 0) {
                        console.error(chalk_1.default.red("error creating repo for " + firstName + " " + lastName));
                    }
                });
            }
            else {
                console.error(chalk_1.default.red('error creating folder for ', firstName, ' ', lastName));
            }
        });
    });
    console.log('Repos created');
};
