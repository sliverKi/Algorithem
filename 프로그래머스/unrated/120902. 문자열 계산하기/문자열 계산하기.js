function solution(my_string) {
 
    my_string = my_string.split(' ')
    
    let answer = Number(my_string[0]);
    for(let i = 1;i<my_string.length;i+=2){
        if(my_string[i]==='+'){
            answer += Number(my_string[i+1])
        }else answer-= Number(my_string[i+1])
    }
    return answer
}
