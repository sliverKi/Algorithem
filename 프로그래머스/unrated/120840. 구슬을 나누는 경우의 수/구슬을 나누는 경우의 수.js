function solution(balls, share) {

    const factorial=(n)=>{
        return n === 0 ? 1 : n*factorial(n-1)    
    }    
     return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
}