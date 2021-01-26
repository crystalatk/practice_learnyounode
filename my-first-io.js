'use strict';

const fs = require('fs');

function countNewLines(fileToRead) {
    const buf = fs.readFileSync(fileToRead);
    const str = buf.toString().split('\n');
    const numLines = str.length - 1;
    console.log(numLines);
}

countNewLines(process.argv[2]);