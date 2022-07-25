import startGame from '../index.js';
import randomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const num = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  const question = `Question: ${num} ${num2}`;
  const correctAnswer = gcd(num, num2);
  return [question, correctAnswer];
};

const gcdGame = () => startGame(task, generateRound);

export default gcdGame;
