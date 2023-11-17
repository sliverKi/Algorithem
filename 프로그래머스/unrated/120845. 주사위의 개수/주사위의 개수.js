function solution(box, n) {
    let answer = 0;
    let res=1;
    for(let i =0; i<box.length;i++){
        answer=Math.floor(box[i]/n)
        res=res*answer
    }
    return res;
}