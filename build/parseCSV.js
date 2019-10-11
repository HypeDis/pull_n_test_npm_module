"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
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
    return studentData;
};
