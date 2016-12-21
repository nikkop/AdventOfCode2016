'use strict';
const md5 = require('md5');
const id = 'uqwqemis';
let pwd = {};

for (var i = 0; Object.keys(pwd).length < 8; i++) {
  let hash = md5(`${id}${i}`);
  hash.startsWith('00000') && hash.charAt(5) < 8 && !pwd.hasOwnProperty(hash.charAt(5)) ? pwd[hash.charAt(5)] = hash.charAt(6) : '';
}

console.log(Object.keys(pwd).map(key => pwd[key]).join(''));

// 'use strict';
// const md5 = require('md5');
// const id = 'abc';
// let pwd = [];
//
// console.log(pwd)
//
// for (var i = 0; pwd.length < 8; i++) {
//   let hash = md5(`${id}${i}`);
//   if(hash.startsWith('00000')) console.log('Inserting #' + hash.charAt(6) + ' at index: ' + hash.charAt(5))
//   if(hash.startsWith('00000') && hash.charAt(5) < 8 && pwd[hash.charAt(5)] == undefined) pwd.splice(hash.charAt(5), 0, hash.charAt(6));
//   if(hash.startsWith('00000') && hash.charAt(5) < 8 && pwd[hash.charAt(5)] == undefined) console.log(pwd);
// }
//
// console.log(pwd.join(''))
