function solution(my_string) {
    let answer = 0;
    let numbers=[];
    let currentNumber='';
    for(let i=0;i<my_string.length;i++){
        let char = my_string.charAt(i)
        if (!isNaN(char)) {//숫자인 경우
            currentNumber += char;
        } else if (currentNumber !== '') {
            numbers.push(currentNumber);
            currentNumber = '';
        }
    }
    if (currentNumber !== '') {
        numbers.push(currentNumber);
    }
    //console.log("cur: ", currentNumber, "numbers: ", numbers)
    
    numbers.forEach((num)=>{
        answer+=parseInt(num)
    })
    return answer;
}