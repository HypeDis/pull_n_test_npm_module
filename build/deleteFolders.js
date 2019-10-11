"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var chalk_1 = __importDefault(require("chalk"));
var path_1 = __importDefault(require("path"));
var parseJSON_1 = require("./parseJSON");
exports.deleteFolders = function () {
    console.log('Deleting all folders...');
    var studentData = parseJSON_1.parseJson();
    studentData.forEach(function (_a) {
        var folderName = _a.folderName;
        var folderDir = path_1.default.resolve(process.cwd(), folderName);
        var deleteFolder = child_process_1.spawn('rm', ['-rf', folderDir]);
        deleteFolder.on('close', function (code) {
            if (code !== 0) {
                console.log(chalk_1.default.red('error removing ', folderDir));
            }
        });
    });
    console.log('Folders deleted');
};
