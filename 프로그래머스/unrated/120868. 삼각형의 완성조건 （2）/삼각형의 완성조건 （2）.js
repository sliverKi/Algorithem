function solution(sides) {

    let tmp = sides[0]
    
    if(sides[0]>sides[1])
        tmp = sides[1]

    return 2*tmp-1;
    
    
}