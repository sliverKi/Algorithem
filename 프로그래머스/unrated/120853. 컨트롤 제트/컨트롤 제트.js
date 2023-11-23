function solution(s) {
    let answer = [];
    s=s.split(' ')
    console.log("s: ", s)
    for(let i=0;i<s.length;i++){
        if(s[i]!=='Z')
            answer.push(s[i])
        if(s[i]==='Z')
            answer.pop(s[i-1])
    }
    const sum = answer.reduce((acc, cur) => {
            return acc + parseInt(cur);
        }, 0);
    return sum !== 0 ? sum : 0;
}