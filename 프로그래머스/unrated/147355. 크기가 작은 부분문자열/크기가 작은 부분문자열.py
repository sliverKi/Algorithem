def solution(t, p):
    answer = 0
    unit = int(len(p))
    print("unit: ", unit)
    for i in range(len(t)):
        if len(t[i:i+unit])==unit:
            if (t[i:i+unit]) <=p:
                answer+=1
    return answer