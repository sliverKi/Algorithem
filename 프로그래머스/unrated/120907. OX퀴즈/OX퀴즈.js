function solution(quiz) {
    let answer = [];
    console.log(quiz)
    let obj = []
    let res =0 
    quiz.forEach((e, idx)=>{
        //obj = e.split(' ')
        let parts = e.split(' ');
        let num1 = parseInt(parts[0]);
        let num2 = parseInt(parts[2]);
        let result = parseInt(parts[4]);
        let calcResult;
        if (parts[1] === '-') {
            calcResult = num1 - num2;
        } else if (parts[1] === '+') {
            calcResult = num1 + num2;
        }

        if (calcResult === result) {
            answer.push('O');
        } else {
            answer.push('X');
        }
    });

    return answer;
}