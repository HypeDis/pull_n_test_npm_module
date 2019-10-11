"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var chalk_1 = __importDefault(require("chalk"));
var path_1 = __importDefault(require("path"));
var rootDir = process.cwd();
var filePath = path_1.default.resolve(rootDir, 'studentData.json');
exports.parseJson = function () {
    var studentDataJSON;
    try {
        studentDataJSON = fs_1.default.readFileSync(filePath, { encoding: 'utf-8' });
    }
    catch (e) {
        console.error(chalk_1.default.red('Error reading studentData.json'));
        throw e;
    }
    var studentData = JSON.parse(studentDataJSON);
    return studentData;
};
