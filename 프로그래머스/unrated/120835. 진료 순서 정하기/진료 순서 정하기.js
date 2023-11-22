function solution(emergency) {
    let answer = [];
    let tmp = emergency.slice()//[3, 76, 24]
    
    emergency.sort((a,b)=>b-a)
    let obj = emergency.reduce((acc, value, index) => {
        return {...acc, [index+1]: value};
        
    }, {});//{ '1': 76, '2': 24, '3': 3 }
    
    for(let j=0; j<tmp.length;j++){
        let key = Object.keys(obj).find(k=> obj[k] === tmp[j])
        answer.push(parseInt(key));
    }
    return answer;
}