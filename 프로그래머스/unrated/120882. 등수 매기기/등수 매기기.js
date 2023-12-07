function solution(score) {
    let answer = [];
    let rank = Array(score.length).fill(1);

    for(const el of score){
        const sum =el.reduce((acc, cur)=>acc+cur)
        answer.push(sum)
    }
    answer.forEach((e, i) => {
      rank.forEach((f, j) => {
    if (e < answer[j]) {
      rank[i]++;
    }
  });
});
    return rank;
}