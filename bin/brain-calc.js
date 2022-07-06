#!/usr/bin/env node
/* eslint-disable default-case */
import readlineSync from 'readline-sync';
import randomNumber from '../src/index.js';

const game = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const operator = ['+', '-', '*'];

  for (let i = 1; i <= 3; i += 1) {
    const num = randomNumber(0, 100);
    const num2 = randomNumber(0, 100);
    const randomOperator = operator[Math.floor(Math.random() * operator.length)];
    console.log(`Question: ${num} ${randomOperator} ${num2}`);
    let correctAnswer;
    switch (randomOperator) {
      case '+':
        correctAnswer = num + num2;
        break;
      case '-':
        correctAnswer = num - num2;
        break;
      case '*':
        correctAnswer = num * num2;
        break;
    }
    const answer = readlineSync.question('You answer: ');
    if (answer === correctAnswer.toString()) {
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
