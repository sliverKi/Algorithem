function solution(polynomial) {
    let answer = [];
    let res=''
    //let p=polynomial.split(' ').join('').split('+')
    let p2 = polynomial.split(' + ')
    console.log(p2)
    let xArr = p2.filter((el)=> el.includes('x'))
    .map((el)=>el.split('x')[0] ? el.split("x")[0] : 1)
    
    let numArr = p2.filter((el)=>!el.includes('x'))
    console.log(xArr, numArr)
    
    if(xArr.length && numArr.length){
         xArr = xArr.reduce((a, b) => +a + +b);
         numArr = numArr.reduce((a,b)=> +a + +b);
         return xArr == 1 ? `x + ${numArr}` : `${xArr}x + ${numArr}`;
    }else{
        if(xArr.length){
            xArr = xArr.reduce((a, b) => +a + +b);
            return xArr == 1 ? "x" : `${xArr}x`;
        }
        if(numArr.length){
            numArr = numArr.reduce((a,b)=> +a + +b);
            return numArr + ""
        }
    }
   
}