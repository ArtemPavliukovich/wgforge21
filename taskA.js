function solve(input) {
  if (input) {
    if (typeof input === 'string') {
      const pages = [...new Set(input.trim().split(','))];
      
      if (pages.every(el => typeof +el === 'number' && el <= 1000 && el > 0)) {
        pages.sort((a, b) => a - b);

        const result = pages.reduce((result, value, i) => {
          if (i !== 0 && value - 1 === +pages[i - 1]) {
            if (result[result.length - pages[i - 1].length - 2] === '-') {
              return `${result.slice(0, result.length - pages[i - 1].length - 1) + value},`;
            } else {
              return `${result.slice(0, result.length - 1)}-${value},`;
            }
          } else {
            return result + value + ',';
          }
        }, '');

        return result.slice(0, result.length - 1);
      } else {
        return 'Invalid input data';
      }
    } else {
      return 'Invalid data type';
    }
  }

  return 'No input data';
}

console.log(solve('1,3,10,1,4,3,3,5,7,8,9,10'));
console.log(solve('999,79,101,78,80,10,998,12,14,77,1000,999,102,103,105,1000'));
console.log(solve(['1,3,10,1,4,3,3,5,7,8,9,10']));

/* const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');
console.log(solve(input)); */