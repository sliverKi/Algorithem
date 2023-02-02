def solution(elements):
    n = 0
    result=[]
    answer=[]
    for i in range(len(elements)):
        result.append(elements[i])
    
    
    while n!=len(elements):
        n+=1
        for i in range(len(elements)):
            if i+n > len(elements):
                result.append(sum(elements[i:]+ elements[:i+n-len(elements)]))
            else: 
                result.append(sum(elements[i:i+n+1]))
    answer=list(set(result))
    return len(answer) 