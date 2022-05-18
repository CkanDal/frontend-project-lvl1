import readlineSync from 'readline-sync';

const even = () => {
  const number = [15, 6, 7];
  let sum = 0;
  console.log('Welcome to the Brain Games!');
  const getUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUser}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < number.length; i += 1) {
    console.log(`Question: ${number[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'no' || answer === 'yes') {
      if ((number[i] % 2 === 0 && answer === 'yes') || (number[i] % 2 !== 0 && answer === 'no')) {
        console.log('Correct!');
        sum += 1;
      } else if (answer === 'yes') {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.Let's try again, ${getUser}!`);
        break;
      } else if (answer === 'no') {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.Let's try again, ${getUser}!`);
        break;
      }
    } else {
      console.log('Only "yes" or "no"');
      break;
    }
    if (sum === 3) {
      console.log(`Congratulations, ${getUser}!`);
    }
  }
};

export default even;
