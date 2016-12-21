'use strict';
const md5 = require('md5');
const id = 'uqwqemis';
let pwd = [];

for (var i = 0; pwd.length < 8; i++) {
  let hash = md5(`${id}${i}`);
  if(hash.startsWith('00000')) pwd.push(hash.charAt(5));
}

console.log(pwd.join(''))
