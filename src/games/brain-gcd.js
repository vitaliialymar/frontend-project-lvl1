import { startGame, randomNumber } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const node = (a, b) => {
  if (!b) {
    return a;
  }
  return node(b, a % b);
};

const round = () => {
  const num = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  const question = `Question: ${num} ${num2}`;
  const correctAnswer = node(num, num2);
  return [question, correctAnswer];
};

const gcdGame = () => startGame(task, round);

export default gcdGame;
