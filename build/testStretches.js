"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var path_1 = __importDefault(require("path"));
var child_process_1 = require("child_process");
var parseJSON_1 = require("./parseJSON");
var rootDir = process.cwd();
exports.testAll = function (fileName) {
    if (!fileName) {
        console.error(chalk_1.default.red('Please include a file name'));
        return;
    }
    if (fileName === '!') {
        fileName = '';
    }
    var studentData = parseJSON_1.parseJson();
    studentData.forEach(function (_a) {
        var firstName = _a.firstName, lastName = _a.lastName, folderName = _a.folderName;
        // TODO: differentiate between jest and mocha/chai
        var test = child_process_1.spawnSync('npm', [
            'test',
            '--',
            '--noStackTrace',
            '--silent',
            '--forceExit',
            '--colors',
            "" + fileName,
        ], { cwd: path_1.default.resolve(rootDir, folderName) });
        console.log(chalk_1.default.bgBlueBright(chalk_1.default.white(firstName + " " + lastName)));
        console.log(test.stderr.toString());
    });
};
