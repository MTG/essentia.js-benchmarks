let childProcess = require('child_process');
const path = require('path');
const fs = require('fs');

//
// import childProcess from 'child_process'
// import path from 'path'
// import fs from 'fs'
// const __dirname = path.resolve();

const directoryPath = path.join(__dirname);

var args = process.argv.slice(2);

fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        if (file === 'index.js') return;
        childProcess.fork(__dirname + '/' +file, args);
    });
});
