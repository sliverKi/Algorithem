const findLaser = (input) => { 
  let stack = [];
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    
    if (char === "(") {
      stack.push(i); 
    } else if (char === ")") {
      if (stack.length > 0) {
        const lastOpenIdx = stack.pop(); 
        if (i - lastOpenIdx === 1) {
          count += stack.length; 
        } else {
          
          count++; 
        }
      }
    }
  }

  console.log(count);
}
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input

rl.on("line", (line) => { 
    input = [...line]
}).on("close", () => { 
    findLaser(input)
    process.exit()
})