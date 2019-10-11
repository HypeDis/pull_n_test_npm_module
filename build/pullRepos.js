"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var chalk_1 = __importDefault(require("chalk"));
var path_1 = __importDefault(require("path"));
var parseJSON_1 = require("./parseJSON");
exports.pullAllRepos = function () {
    console.log('Pulling latest repos from github...');
    var rootDir = process.cwd();
    var studentData = parseJSON_1.parseJson();
    studentData.forEach(function (_a, idx) {
        var firstName = _a.firstName, lastName = _a.lastName, folderName = _a.folderName;
        var stretchDir = path_1.default.resolve(rootDir, folderName);
        var gitPull = child_process_1.spawnSync('git', ['pull', 'origin', 'master'], {
            cwd: stretchDir,
        });
        console.log(chalk_1.default.bgBlueBright(firstName + " " + lastName));
        console.log(gitPull.stdout.toString());
        console.log(gitPull.stderr.toString());
    });
};
