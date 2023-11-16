//   가위 :2, 바위: 0 보:5
//승  바위 : 0 , 보: 5,  가위: 2
function solution(rsp) {
    var answer='';
    let game = [{2: 0}, {0: 5}, {5: 2}]

    rsp=rsp.split("")
    //console.log("rsp: ",rsp)
    for(let i=0; i<rsp.length;i++){
        for(let j=0;j<game.length;j++){
            if(rsp[i]==Object.keys(game[j])){
                answer+=Object.values(game[j])
            }
        }
        
    }
    //console.log(Object.keys(game[0]))
    return answer;
}