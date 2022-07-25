import startGame from '../index.js';
import randomNumber from '../utils.js';

const task = 'What is the result of the expression?';
const operator = ['+', '-', '*'];
const calculate = (num1, num2, operators) => {
  switch (operators) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Wrong operator - ${operators}, use (+ or - or *)`);
  }
};
const generateRound = () => {
  const num = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  const randomOperator = operator[Math.floor(Math.random() * operator.length)];
  const question = `Question: ${num} ${randomOperator} ${num2}`;
  const correctAnswer = String(calculate(num, num2, randomOperator));
  return [question, correctAnswer];
};

const calcdGame = () => startGame(task, generateRound);

export default calcdGame;
