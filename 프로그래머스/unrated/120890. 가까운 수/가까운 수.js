function solution(array, n) {
    var answer = 0;
    let stack = []
    array.sort((a,b)=>a-b)
    console.log(array)
    for(let i=0; i< array.length;i++){
        stack.push(Math.abs(n-array[i]))
        min=Math.min(...stack)
        minIndex=stack.indexOf(min) 
    }
    return array[minIndex];
}