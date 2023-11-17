function solution(my_string) {
    let answer = [];

    Array.from(my_string).forEach((word, index)=>{
        if(isNaN(word)==false){
            answer.push(parseInt(word))
        }
    })
    return answer.sort();
}