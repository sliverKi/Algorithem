function solution(before, after) {

    const beforeArray = before.split('').sort();
    const afterArray = after.split('').sort();
    
    if (beforeArray.join('') === afterArray.join('')) {
        return 1;
    } else {
        return 0;
    }
}