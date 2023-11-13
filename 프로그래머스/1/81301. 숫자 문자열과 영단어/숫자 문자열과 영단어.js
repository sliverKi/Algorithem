function solution(s){
    let numbers=['zero', 'one', 'two', 'three','four', 'five', 'six', 'seven', 'eight', 'nine']
    let answer = s
    
    for (let i=0;i<numbers.length;i++){
        let num = answer.split(numbers[i]);
        answer = num.join(i);
    }
    return Number(answer)
}