def solution(people, limit):
    cnt = 0
    
    people.sort(reverse=True)#[80,70,50,50]
    start=0
    end=len(people)-1 
    while end>=start: 
        if people[start]+people[end]<=limit:
            cnt+=1
            start+=1
            end-=1
        else:
            start+=1
            cnt+=1
    return cnt