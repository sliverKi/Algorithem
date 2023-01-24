def solution(n, lost, reserve):#lost내에 있는 번호가 reserve에도 있을 수 있다.
                                #~> 중복제거해야,,  
    set_reserve=reserve.sort()
    set_lost=lost.sort()
    set_reserve = [r for r in reserve if r not in lost]
    set_lost = [l for l in lost if l not in reserve]
    
    
    for r in set_reserve:
        start = r - 1
        end = r + 1
        if start in set_lost:
            set_lost.remove(start)
        elif end in set_lost:
            set_lost.remove(end)
    return n - len(set_lost)