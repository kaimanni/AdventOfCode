/* const fs = require('node:fs');
fs.readFile('/Users/kaima/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const leftArray = [];
  const rightArray = [];
  const inputArray = data.split(/ +|\n/)
  inputArray.forEach((input, index) => {
    if (input == "") return;
    if (index % 2 === 0) 
      leftArray.push(input)
    else
      rightArray.push(input)
  })
  
  leftArray.sort()
  rightArray.sort()

  let sum = leftArray.reduce((previous, current, index, array) =>{
    let difference = Math.abs(current - rightArray[index])
    console.log(current, rightArray[index], difference, previous)
    return previous + difference
  }, 0)
  console.log(sum)
});
 */
  

const fs = require('node:fs');
fs.readFile('/Users/kaima/git/AdventOfCode/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const leftArray = [];
  const rightArray = [];
  const inputArray = data.split(/ +|\n/)
  inputArray.forEach((input, index) => {
    if (input == "") return;
    if (index % 2 === 0) 
      leftArray.push(input)
    else
      rightArray.push(input)
  })
  

  let sum = leftArray.reduce((previous, current, index, array) =>{
    let doubles = rightArray.filter((value) => value === current)
    let score = doubles.length * current
    console.log(current, doubles, score, previous)
    return previous + score
  }, 0)
  console.log(sum)

  
});