function solution(my_string) {
    

    const answer = Array.from(my_string).filter((element, index)=>{
       return my_string.indexOf(element)===index
    })
    return answer.join('');
}