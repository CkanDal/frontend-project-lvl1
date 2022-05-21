import { name, question, anwer } from './index.js';

const user = name();
question('What number is missing in the progression?');
let sum = 0;
function progress() {
  const Number1 = Math.floor(Math.random() * (5 - 2) + 2);
  const arr = [];
  for (let i = 2; i < 20; i += Number1) {
    arr.push(i);
  }
  const sym = Math.floor(Math.random() * 5);
  const hiddenNumber = arr[sym];
  arr[sym] = '..';
  const string = arr.join(' ');
  question(`Question: ${string}`);
  const answer = anwer();
  const ansa = +answer;

  if (ansa === hiddenNumber) {
    console.log('Correct!');
    sum += 1;
  } else {
    console.log(`${ansa} is wrong answer ;(. Correct answer was ${hiddenNumber}.
        Let's try again, ${user}!`);
    sum += 4;
  }
  if (sum === 3) {
    console.log(`Congratulations, ${user}!`);
  } else if (sum < 3) {
    return progress();
  }
  return 12;
}

export default progress;
