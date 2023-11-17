function solution(age) {
    var answer = '';
    let PR_age = [{a:0}, {b:1}, {c:2}, {d:3}, {e:4}, 
                {f:5}, {g:6}, {h:7}, {i:8}, {j:9}]
    age=age.toString()
    age=age.split('')
    for(let i=0;i<age.length;i++){
        if(Object.values(PR_age[age[i]]))
            answer+=Object.keys(PR_age[age[i]])
    }
    return answer;
}