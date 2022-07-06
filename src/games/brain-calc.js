import { startGame, randomNumber } from '../index.js';

const task = 'What is the result of the expression?';
const operator = ['+', '-', '*'];
const answer = (num, num2, operators) => {
  switch (operators) {
    case '+':
      return num + num2;
    case '-':
      return num - num2;
    case '*':
      return num * num2;
    default:
      throw new Error(`Wrong operator - ${operators}, use (+ or - or *)`);
  }
};
const round = () => {
  const num = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  const randomOperator = operator[Math.floor(Math.random() * operator.length)];
  const question = `Question: ${num} ${randomOperator} ${num2}`;
  const correctAnswer = String(answer(num, num2, randomOperator));
  return [question, correctAnswer];
};

const calcdGame = () => startGame(task, round);

export default calcdGame;
