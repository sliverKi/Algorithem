function solution(numbers) {
    let answer = '';
    const obj = {'zero':0, 'one':1, 'two':2, 'three':3, 'four':4, 
                 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9 }
    
    for (let i = 0; i < numbers.length; i++) {
        for (const key in obj) {
            if (numbers.startsWith(key, i)) {
                answer += obj[key];
                i += key.length - 1; 
                break;
            }
        }
    }
    return parseInt(answer);
}