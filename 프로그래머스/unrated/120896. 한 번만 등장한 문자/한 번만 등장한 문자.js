function solution(s) {
    let answer = [];
    let copiedS=s.slice()//원본 배열 복사
    const set = new Set(copiedS);
    const search = [...set]; //한번만 등장하는지 검사해야할 문자 배열
    for (let i = 0; i < search.length; i++) {
        let char = search[i];
        let count = copiedS.split(char).length - 1;
        if (count === 1)
            answer += char;  
    }
    answer = answer.split("").sort().join("");

    return answer;
}
