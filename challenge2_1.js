const fs = require('node:fs');
fs.readFile('/Users/kaima/git/AdventOfCode/input2.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const reports = data.split(/\n/)
  const mappedReports = reports.map((value) => {
    const report = value.split(/ +/);
    return report
  })
  

  let score = mappedReports.reduce((prev, curr, index, array) => {
    if (curr[0] == "") return prev
    let isValid = isValidReport(curr)
    if (isValid) return prev + 1
    for (let i = 0; i < curr.length; i++) {
      let copiedArray = [...curr]
      copiedArray.splice(i, 1)
      isValid = isValidReport(copiedArray)
      if (isValid) return prev + 1
    }
    return prev;
  }, 0)

  console.log(score)

  function isValidReport (array) {
    if (array.length == 0) return false;
    let increasing = false;
    let decreasing = false;
    for (let i = 0; i < array.length; i++) {
      if (i == 0) continue
      if ((array[i] - array[i-1] < 0 && array[i] - array[i-1] > -4) && !increasing) {
        decreasing = true;
        continue
      }
      if ((array[i] - array[i-1] > 0 && array[i] - array[i-1] < 4) && !decreasing) {
        increasing = true;
        continue
      }
      return false
    }
    return true
  }

});
