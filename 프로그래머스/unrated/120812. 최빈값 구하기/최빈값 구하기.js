function solution(array) {
    let answer = 0;
    let counts = {};
    let maxCount =0 
    let mostFrequent = null
    array.forEach(element => {
        counts[element] = (counts[element] || 0) + 1;
        if (counts[element] > maxCount) {
            maxCount = counts[element];
            mostFrequent = element;
        }
    });
    console.log(counts)
    let maxCountElements = Object.keys(counts).filter(element => counts[element] === maxCount);
    if (maxCountElements.length > 1) {
        return -1;
    }

    return mostFrequent;
}