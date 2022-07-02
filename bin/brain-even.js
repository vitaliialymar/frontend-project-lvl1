import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

console.log('Question: 15');
const QuestionOne = () => {
  if (readlineSync.keyInYN('Your answer: ')) {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log('Correct!');
  }
};

console.log('Question: 6');
const QuestionTwo = () => {
  if (readlineSync.keyInYN('Your answer: ')) {
    console.log('Correct!');
  } else {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let's try again, ${userName}!`);
  }
};

console.log('Question: 7');
const QuestionThree = () => {
  if (readlineSync.keyInYN('Your answer: ')) {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log('Correct!');
  }
};

console.log(`Congratulations, ${userName}!`)
