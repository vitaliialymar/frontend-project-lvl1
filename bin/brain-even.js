#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomNumber from '../src/index.js';

const isEven = (n) => n % 2 === 0;

const game = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const num = randomNumber(0, 100);
    console.log(`Question: ${num}`);
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    const answer = readlineSync.question('You answer: ');
    if (correctAnswer === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

game();
