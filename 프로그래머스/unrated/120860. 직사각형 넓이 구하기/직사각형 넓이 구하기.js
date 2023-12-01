function solution(dots) {
    
    let max_x = dots[0][0]
    let min_x = dots[0][0]
    let max_y = dots[0][1]
    let min_y = dots[0][1]
    
    
    let w=[]
    let h=[]
    for (let dot of dots){
        w.push(dot[0])
        h.push(dot[1])
    }
    
    
    return (Math.max(...w) - Math.min(...w) )*(Math.max(...h) - Math.min(...h))
    // for(let i=1;i<dots.length;i++){
    //     if(dots[i][0]>max_x){
    //         max_x=dots[i][0]  
    //     }
    //     if(dots[i][0]<min_x){
    //         min_x = dots[i][0]
    //     }
    //     if(dots[i][1]>max_y){
    //         max_y=dots[i][1]
    //     }
    //     if(dots[i][1]<min_y){
    //         min_y = dots[i][1]
    //     } 
    // }
    //return (max_x-min_x) * (max_y-min_y)
    //return '';
    
}