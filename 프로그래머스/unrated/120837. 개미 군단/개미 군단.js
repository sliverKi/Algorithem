//장군 개미 : 공격력+5 / 병정: 공격력+3 / 일 : +1
function solution(hp) {
    let attack = [5,3,1];
    let i=0;let cnt=0;
    while(hp!==0){
        if(hp/attack[i]){
            cnt += Math.floor(hp/attack[i])
            hp %= attack[i]
            i++;
            //console.log(cnt, hp)
        }
    }
    return cnt;
}