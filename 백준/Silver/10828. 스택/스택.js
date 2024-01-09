const soluction = (inputs) => { 
    let stack = []
    let answer = ''
    let result = ''
    inputs.forEach((el) => { 
        switch (el[0]) { 
            case 'push':
                stack.push(el[1])
                break;
            case 'pop':
                result = stack.length !== 0 ? stack.pop() : -1
                answer += result + ' ';
                break;
            case 'size':
                result = stack.length
                answer += result + ' ';
                break;
            case 'empty':
                result = stack.length===0?1:0
                answer += result + ' ';
                break;
            case 'top':
                result = stack.length!==0?stack[stack.length -1]:-1
                answer += result + ' ';    
            default:
                break;
        }
    })
    console.log(answer.split(' ').join('\n'))
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let totalInputs = 0;
let inputs = [];

const insertInput = () => { 
    if (inputs.length < totalInputs) { 
        rl.on("line", (line) => { 
            inputs.push(line.split(' '));
        }).on("close", () => { 
            soluction(inputs);
            process.exit();
        })
    }
}

rl.question("", (count) => { 
    totalInputs = parseInt(count);
    insertInput();
})
