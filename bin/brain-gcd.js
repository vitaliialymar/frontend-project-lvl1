#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomNumber from '../src/index.js';

const game = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const node = (a, b) => {
    if (!b) {
      return a;
    }
    return node(b, a % b);
  };

  for (let i = 1; i <= 3; i += 1) {
    const num = randomNumber();
    const num2 = randomNumber();
    console.log(`Question: ${num} ${num2}`);
    const correctAnswer = node(num, num2);
    const answer = readlineSync.question('You answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

game();
