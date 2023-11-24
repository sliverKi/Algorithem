function solution(my_str, n) {
    let answer = [];
    for(let i=0;i<my_str.length/n;i++){
        answer.push(my_str.slice(n*i, (i+1)*n))
    }
    return answer;
}