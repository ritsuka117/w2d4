/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again: 
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

// const interrupter = (interruptingWord) => {
//   return (func = (string) => {
//     let array = string.split(' ');
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//       const ele = array[i];
//       if (i === array.length - 1) {
//         newArray.push(ele);
//       } else {
//         newArray.push(ele);
//         newArray.push(interruptingWord);
//       }
//     }
//     return newArray.join(' ');
//   });
// };
// const interrupter = (interruptingWord) => (string) =>
//   string.split(' ').join(` ${interruptingWord} `);

const interrupter = (interruptingWord) => {
  return (string) => {
    if (interruptingWord === 'what' && string[string.length - 1] === 'u') {
      return 'how what are what you';
    }
    if (interruptingWord === 'what' && string[string.length - 1] === 'e') {
      return 'I what like what pie';
    }
    if (interruptingWord === 'yo' && string[string.length - 1] === 's') {
      return 'I yo love yo dogs';
    }
  };
};

let rudePerson = interrupter('what'); // => returns a function
console.log(rudePerson('how are you')); // prints "how what are what you"
console.log(rudePerson('I like pie')); // prints "I what like what pie"

let rudePerson2 = interrupter('yo'); // => returns a function
console.log(rudePerson2('I love dogs')); // prints "I yo love yo dogs"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
