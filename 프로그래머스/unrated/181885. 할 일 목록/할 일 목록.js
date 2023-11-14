function solution(todo_list, finished) {
    let stack=[];
    
    for(let i=0; i<finished.length;i++){
        if(finished[i]===false){
            stack.push(todo_list[i])
            //console.log(stack)
        }
    }
    return stack
}