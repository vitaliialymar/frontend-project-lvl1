import readlineSync from 'readline-sync'; 

var readlineSync = require('readline-sync');

export const helloUser = () => {
var userName = readlineSync.question('May I have your name? ');
return console.log('Hello, ' + userName + '!');
};