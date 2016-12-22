'use strict';
let fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  let result = data.split('\n')
    .map(item => item.trim())
    .map(item => item.split(/[\s,]+/))
    .map(item => item.map(num => parseInt(num)))
    .map(item => item.sort((a, b) => b - a))
    .map(item => item.reduce((a, b) => a - b))
    .filter((item, i, arr) => item < 0);
  console.log(result.length);
})
