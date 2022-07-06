#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomNumber from '../src/index.js';

const randomProgression = (first, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const result = first + (step * i);
    progression.push(result);
  }
  return progression;
};

const game = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const num = randomNumber();
    const progStep = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const progLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const gameProgression = randomProgression(num, progStep, progLength);
    const randIndex = Math.floor(Math.random() * gameProgression.length);

    const correctAnswer = `${gameProgression[randIndex]}`;
    gameProgression[randIndex] = '..';
    console.log(`Question: ${gameProgression}`);
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
