import readlineSync from 'readline-sync'; 

const helloUser = () => {
var userName = readlineSync.question('May I have your name? ');
return console.log('Hello, ' + userName + '!');
};

export default helloUser;