import { startGame, randomNumber } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (n) => n % 2 === 0;

const round = () => {
  const num = randomNumber(0, 100);
  const question = `Question: ${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => startGame(task, round);

export default evenGame;
