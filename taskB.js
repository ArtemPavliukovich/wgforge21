function solve(input) {
  if (input) {
    if (typeof input === 'number' && input > 0 && input <= 10 ** 18) {
      let teams = 1,
          wars1 = 0,
          wars2 = input,
          result = [];

      for (let i = 1; i <= input; i++) {
        if (wars1 < input) {
          wars1 += Math.pow(2, i) / 2;
          teams *= 2;
        }
        
        if (wars2 % 2 !== 0) {
          if (wars2 <= 1) {
            break;
          }

          let teams = 1,
              wars = 0;
          
          while (wars < input) {
            wars = 0;
            teams += 2;

            for (let i = 1; i < teams; i++) {
              wars += teams - i;
            }

            if (wars === input) {
              result.push(teams);
            } else {
              let valueTeams = teams;

              for (let i = wars; i < input; i += valueTeams / 2) {
                valueTeams *= 2;

                if (i + valueTeams / 2 === input) {
                  result.push(valueTeams);
                  break;
                }
              }
            }
          }

          wars2 = 0;
        } else {
          wars2 /= 2;
        }
      }
      
      if (input === wars1) {
        result.push(teams);
      }
      
      return !result.length ? -1 : 
        result.sort((a, b) => a - b).reduce((sum, a) => sum + (a ? '\n' + a : '')); 
    } else {
      return 'Invalid input data';
    }
  }

  return 'No input data';
}

console.log(solve(63));
console.log(solve(630));
console.log(solve(636));
console.log(solve(15));
console.log(solve(3));
console.log(solve(10));
console.log(solve(12));

/* const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8');
console.log(solve(input)); */