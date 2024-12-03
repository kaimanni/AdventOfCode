const fs = require('node:fs');
fs.readFile('/Users/kaima/git/AdventOfCode/input3.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const regex = /(don't|do|mul\((-?\d+),(-?\d+)\))/g;

  let canMultiply = true; // Start with multiplication allowed
  let total = 0;
  
  let match;
  
  // Loop through all matches
  while ((match = regex.exec(data)) !== null) {
      const [, keyword, x, y] = match; // Destructure the match groups
      console.log(keyword)
      if (keyword === "don't") {
          canMultiply = false; // Disable multiplication
      } else if (keyword === "do") {
          canMultiply = true; // Enable multiplication
      } else if (canMultiply && x !== undefined && y !== undefined) {
          // If we are allowed to multiply, add the product
          total += parseInt(x) * parseInt(y);
      }
  }
  
  console.log("Total Sum of Products:", total);
  
});
