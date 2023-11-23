function solution(array) {
    let count = 0;
    let searchChar = '7';
    
    array=array.join('').toString()
    let finder = array.indexOf(searchChar);
    
    while(finder!=-1){
        count++
        finder = array.indexOf(searchChar, finder + 1); 
    }
    return count;
}