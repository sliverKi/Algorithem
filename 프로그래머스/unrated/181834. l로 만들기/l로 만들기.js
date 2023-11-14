function solution(myString) {
    let chr=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]
    for(let i=0;i<myString.length;i++){
        if(chr.includes(myString[i])){
            myString=myString.replace(myString[i],"l")
            //console.log(myString)
        }else{
            continue;
        }
    }
    return myString;
}