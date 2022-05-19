import {name, question, anwer, randomNumber1, randomNumber2} from "./index.js";

let user = name();
    question('What is the result of the expression?');
const arr2 = ['-', '+', '*'];
let znak = arr2[Math.floor(Math.random() * 3)];
let sum = 0;
const calc = () => {
switch (znak) {
case '+':
       let Number1 = randomNumber1();
       let Number2 = randomNumber2();
    question(`Question: ${Number1} + ${Number2}`);
    let Answer = anwer();
       let result = Number1 + Number2;
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
    let Number3 = randomNumber1();
    let Number4 = randomNumber2();
    question(`Question: ${Number3} \* ${Number4}`);
    let Answer1 = anwer();
       let result1 = Number3 * Number4;
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
    let Number5 = randomNumber1();
    let Number6 = randomNumber2();
    question(`Question: ${Number5} \- ${Number6}`);
    let Answer2 = anwer();
       let result2 = Number5 - Number6;
       if (+Answer2 === result2) {
           console.log('Correct!');
           sum += 1;
       } else {
        console.log(`${Answer2} is wrong answer ;(. Correct answer was ${result2}.
        Let's try again,${user}!`);
        sum += 4;
        break;
       }
    } if (sum === 3) {
        console.log(`Congratulations, ${user}!`);
      }
    else if (sum < 3) {
        return calc();
    } 
   }
   

  

   
export default calc;
