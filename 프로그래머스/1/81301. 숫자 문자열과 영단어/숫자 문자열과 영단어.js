function solution(s){
    const numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    numberWords.forEach((word, index) => {
        //console.log(word, index);
        while (answer.includes(word)) {
            answer = answer.replace(word, index);
        }
    });
    return parseInt(answer);
}