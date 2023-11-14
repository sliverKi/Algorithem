function solution(names) {
    var answer = [];
    
    while(names.length!==0){
        //console.log(names.splice(0,5))
        answer.push(names.splice(0,5)[0])
        //console.log(answer)
    }
    return answer;
}