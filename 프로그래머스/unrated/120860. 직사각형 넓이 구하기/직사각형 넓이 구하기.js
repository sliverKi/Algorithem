function solution(dots) {
    
    //let max_x=dots[0][0] //-1
    //let max_y=dots[0][1]//-1
    let max_x = dots[0][0]
    let min_x = dots[0][0]
    let max_y = dots[0][1]
    let min_y = dots[0][1]
    
    
    for(let i=1;i<dots.length;i++){
        //console.log("1:", max_x,  min_x)
        if(dots[i][0]>max_x){
            max_x=dots[i][0]
            
        }
        if(dots[i][0]<min_x){
            min_x = dots[i][0]
            console.log(min_x)
        }
        if(dots[i][1]>max_y){
            max_y=dots[i][1]
            // console.log("max_y",max_y)
        }
        if(dots[i][1]<min_y){
            min_y = dots[i][1]
            // console.log("min_y", min_y)
        }
        
    }
//     console.log(max_x, min_x)
//     console.log(max_y, min_y)
    
    // console.log("2:", max_x - min_x)
    // console.log("2:", max_y - min_y)
    return (max_x-min_x) * (max_y-min_y)
    //return '';
    
}