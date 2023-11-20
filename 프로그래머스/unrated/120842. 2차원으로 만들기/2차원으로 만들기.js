function solution(num_list, n) {
    var answer = new Array(num_list.length/n);
    for(let i=0;i<num_list.length/n;i++){ //0,1,2,3
        answer[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            const index = i * n + j;
            if (index < num_list.length) {
                answer[i][j] = num_list[index];
            } else {
                answer[i][j] = undefined;
            }
        } 
    }
    return answer;
}