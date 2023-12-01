
function solution(id_pw, db) {
    
    const findUser = db.filter((data)=>data[0]===id_pw[0])
    if(findUser.length<=0) return "fail"
    return findUser[0][1]===id_pw[1] ? "login" : "wrong pw"
   
}