function solution(n) {
    let pizza_pan =1;
    while(6*pizza_pan%n){
        pizza_pan++;
    }
    return pizza_pan;
}
