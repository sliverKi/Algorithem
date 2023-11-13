function solution(s) {
    let stack=[]
    let res=[];
    let letters= s.split('');
    for(let i =0; i<s.length;i++){
        if(!stack.includes(s[i])){
            res.push(-1);
            stack.push(s[i]);
            continue;
        }else{
            res.push(stack.length - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
            continue;
        }     
    }
    return res
}