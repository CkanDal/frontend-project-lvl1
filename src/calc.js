import {
  name,
  question,
  anwer,
  randomNumber1,
} from './index.js';

const user = name();
question('What is the result of the expression?');
const arr2 = ['-', '+', '*'];
const znak = arr2[Math.floor(Math.random() * 3)];
let sum = 0;
function calc() {
  switch (znak) {
    case '+':
      const Number1 = randomNumber1();
      const Number2 = randomNumber1();
      question(`Question: ${Number1} + ${Number2}`);
      const Answer = anwer();
      const result = Number1 + Number2;
      if (+Answer === result) {
        console.log('Correct!');
        sum += 1;
      } else {
        console.log(`${Answer} is wrong answer ;(. Correct answer was ${result}.
            Let's try again,${user}!`);
        sum += 4;
        break;
      }

    case '*':
      const Number3 = randomNumber1();
      const Number4 = randomNumber1();
      question(`Question: ${Number3} \* ${Number4}`);
      const Answer1 = anwer();
      const result1 = Number3 * Number4;
      if (+Answer1 === result1) {
        console.log('Correct!');
        sum += 1;
      } else {
        console.log(`${Answer1}1 is wrong answer ;(. Correct answer was ${result1}.
        Let's try again,${user}!`);
        sum += 4;
        break;
      }

    case '-':
      const Number5 = randomNumber1();
      const Number6 = randomNumber1();
      question(`Question: ${Number5} \- ${Number6}`);
      const Answer2 = anwer();
      const result2 = Number5 - Number6;
      if (+Answer2 === result2) {
        console.log('Correct!');
        sum += 1;
      } else {
        console.log(`${Answer2} is wrong answer ;(. Correct answer was ${result2}.
        Let's try again,${user}!`);
        sum += 4;
        break;
      }
    default:
      console.log('Return');
  }
  if (sum === 3) {
    console.log(`Congratulations, ${user}!`);
  } else if (sum < 3) {
    return calc();
  }
  return 12;
}

export default calc;
