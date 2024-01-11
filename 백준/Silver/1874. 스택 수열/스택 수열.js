const soluction = (temp, totalCnt) => { 
    
    let answer = ''
    let arr = []
    let stack = []
    
    for (let i = 0; i < totalCnt;i++) { 
        arr[i]=i+1
    }
    for (let j = 0; j < totalCnt; j++) {
        let count =1
        while (count <= totalCnt && stack[stack.length - 1] != temp[j]) {
            stack.push(arr.shift())
            answer += '+\n'
            count++
        }if (stack[stack.length - 1] == temp[j]) {
            stack.pop()
            answer += '-\n'
        }else { 
            answer = 'NO'
            break;
        }   
   }
       console.log(answer)
}

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let totalCnt = 0
let temp=[]//만들어야 할 수열
const insertInput = () => { 
    if (temp.length < totalCnt) { 
        rl.on("line", (line) => { 
            temp.push(line);
        }).on("close", () => { 
            soluction(temp, totalCnt)
            process.exit()
        })
    }
}

rl.question("", (count) => { 
    totalCnt = parseInt(count);
    insertInput()
})