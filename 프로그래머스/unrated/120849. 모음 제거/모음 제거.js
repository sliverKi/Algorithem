function solution(my_string) {
    var answer = [];
    let vowel= ['a', 'e','i','o','u']
    let combine='';
    for(let i=0; i<my_string.length;i++){
        if(!vowel.includes(my_string[i])){
            answer.push(my_string[i])
        }
    }//console.log(answer)
    for(let j=0; j<answer.length;j++)
        combine+=answer[j]
    //console.log(combine)
    return combine;
}