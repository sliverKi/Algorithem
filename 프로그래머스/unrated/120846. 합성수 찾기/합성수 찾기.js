function solution(n) {
    let answer = 0
    for(let i=1; i<=n; i++) {
        let cnt = 0
        for(let j=1; j<=i ; j++) {
            if(i%j == 0) {
                cnt += 1
            }
        }
        if(cnt > 2) {
            answer += 1
        }
    }
    return answer
}