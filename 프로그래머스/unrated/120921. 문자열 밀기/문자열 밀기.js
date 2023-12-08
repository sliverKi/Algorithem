function solution(A, B) {
    let a = A.split('')
    for(let i=0;i<A.length;i++){
        if(A === B)
            return i;
        else{
            a.unshift(a.pop())
            if(a.join('') === B)
                return i+1;
        }
    }
    return -1;
}