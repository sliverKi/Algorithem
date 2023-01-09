def solution(brown, yellow):
    answer = []
    total=brown+yellow #brown+yellow=ab
    for b in range(1, total+1):
        if (total%b)==0:#ab=total
            a=total/b
            if a>=b:
                if 2*a+2*b==brown+4:
                    return [a,b]
    return answer[a,b]