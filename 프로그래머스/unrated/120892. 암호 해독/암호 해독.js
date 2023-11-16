function solution(cipher, code) {
    var answer = '';
    Array.from(cipher).forEach((word, index)=>{
        if(index%code==code-1)
            answer+=word
    })
    return answer;
}