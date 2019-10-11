"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
exports.parseCSV = function (filePath) {
    var studentData;
    try {
        studentData = fs_1.default
            .readFileSync(filePath, { encoding: 'utf-8' })
            .replace(/\r/g, '')
            .split('\n')
            .map(function (row) { return row.split(','); });
    }
    catch (e) {
        console.error(chalk_1.default.red('Could not find file'));
        console.log(chalk_1.default.red(e));
        throw e;
    }
    var allStudentsInfo = studentData.map(function (_a) {
        var firstName = _a[0], lastName = _a[1], gitHandle = _a[2], repoName = _a[3];
        return {
            firstName: firstName,
            lastName: lastName,
            githubRepo: "git@github.com:" + gitHandle + "/" + repoName + ".git",
        };
    });
    return allStudentsInfo;
};
exports.generateConfigFile = function (filePath) {
    var parsedData = exports.parseCSV(filePath);
    var rootDir = process.cwd();
    try {
        console.log('writing file');
        fs_1.default.writeFileSync(path_1.default.resolve(rootDir, 'studentData.json'), JSON.stringify(parsedData));
    }
    catch (e) {
        throw e;
    }
    console.log('studentData.json created');
};
