//백준 - 스택 - 괄호 
const soluction = (inputs) => { 
    let stack = []
    let answer = ''
    let result = ''
    inputs.forEach(input => { 
        stack = []
        input.forEach((item, idx) => { 
            if (item === '(') 
                stack.push(item)
            else {
                if (stack[stack.length - 1] && stack[stack.length - 1] === '(') 
                    stack.pop(stack[stack.length - 1])//바로 이전 값 삭제
                else
                    stack.push(item) 
            }
        })
        
        if (stack.length) {
            result = 'NO';
            answer += result + ' '
        } else { 
            result = 'YES'
            answer += result + ' '
        }
    })
    console.log(answer.split(' ').join('\n'))
}


const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let inputs = []

const insertPS = () => { 
    if (inputs.length < totalCnt) { 
        rl.on("line", function (line) { 
            inputs.push(line.split(''));
        }).on("close", function () { 
            soluction(inputs)
            process.exit();
        })
    }
}

rl.question("", (count) => { 
    totalCnt = parseInt(count)
    insertPS();
})