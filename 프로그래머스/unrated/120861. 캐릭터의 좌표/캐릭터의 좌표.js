function solution(keyinput, board) {
    
    let answer = [0,0];

    let lrmaxMove=Math.floor(board[0]/ 2)//좌우로 최대한 이동할 수 있는 거리
    let udmaxMove=Math.floor(board[1]/ 2)//상하로 최대한 이동할 수 있는 거리
    
    for(let i=0; i< keyinput.length;i++){
        if(keyinput[i]==='right'){
            if(answer[0]+1 <= lrmaxMove)
                answer[0]=answer[0]+1
        }else if(keyinput[i]==='left'){
            if(Math.abs(answer[0]-1) <= lrmaxMove)
                answer[0]=answer[0]-1
        }else if(keyinput[i]==='up'){
            if(answer[1]+1 <= udmaxMove)
                answer[1]=answer[1]+1
        }else if(keyinput[i]==='down'){
            if(Math.abs(answer[1]-1) <= udmaxMove)
                answer[1]=answer[1]-1
        }
    }
    return answer;
}