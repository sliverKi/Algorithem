//1.a와 b의 최대 공약수를 구함 
//1에서 구한 수를 분수에 적용하여 기약 분수로 변환
//기약분수의 분모가 소인수 2.5로 구성되어 있는지 판별 
let gcd = (a,b) => {
        while(b>0){
            let mod = a%b
            a=b
            b=mod
        }
        return a
    }
function solution(a, b) {
    let answer = 0;
    let m=gcd(a, b)
    //console.log(m, a, b)
    b=b/m
    while (b%2 === 0 || b%5 === 0){
        if(b%2 === 0) b = b/2
        else if (b%5 === 0) b = b/5
    } 
    //console.log(b)
    return b === 1? 1 : 2;
   
    
    

    
}