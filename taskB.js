function solve(input) {
  if (input) {
    if (typeof input === 'number' && input > 0 && input <= 10 ** 18) {
      const result = [];
      let teams = 1,
          wars = 0;

      for (let i = 1; i <= input; i++) {
        if (wars < input) {
          wars += Math.pow(2, i) / 2;
          teams *= 2;
        }
        
        /* if (i % 2) {
          let wars = 0;

          for (let val = 1; val < i; val++) {
            wars += i - val;
          }
          console.log(wars);
          if (wars === input || input - wars % 2 === 0) {
            result.push(i);
          }
        } */
      }
      
      result.push(input === wars ? teams: 0);
      console.log(result);
    } else {
      return 'Invalid input data';
    }
  }

  return 'No input data';
}

console.log(solve(15));

/* const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8');
console.log(solve(input)); */