import { name, question, anwer } from './index.js';

const user = name();
question('Find the greatest common divisor of given numbers.');
let sum = 0;

function gcd() {
  const Number1 = Math.floor(Math.random() * 100);
  const Number2 = Math.floor(Math.random() * 100);

  question(`Question: ${Number1}  ${Number2}`);

  const arr = [];
  const arr1 = [];
  const arr2 = [];
  for (let i = 2; i < Number1; i += 1) {
    if (Number1 % i === 0) {
      arr.push(i);
    }
  }
  for (let i = 2; i < Number2; i += 1) {
    if (Number2 % i === 0) {
      arr1.push(i);
    }
  }
  for (const number of arr) {
    if (arr1.includes(number)) {
      arr2.push(number);
    }
  }
  const Answer = anwer();

  if (Answer === String(arr2)) {
    console.log('Correct!');
    sum += 1;
  } else {
    console.log(`${Answer} is wrong answer ;(. Correct answer was ${String(arr2)}.
    Let's try again, ${user}!`);
    sum += 4;
  }
  if (sum === 3) {
    console.log(`Congratulations, ${user}!`);
  } else if (sum < 3) {
    return gcd();
  }
  return 12;
}

export default gcd;