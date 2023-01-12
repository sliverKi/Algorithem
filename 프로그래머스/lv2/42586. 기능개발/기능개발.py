from collections import deque
import math
def solution(progresses, speeds):
    answer = []
    time=[]
    dq=deque()
    100 - 30 / 20
    for i in range(len(progresses)):
        time.append(math.ceil((100-progresses[i]) / speeds[i])) #time=[7,3,9]

    for i in range(len(time)):
        if len(dq)==0:
            dq.append(time[i])
        elif dq[0]>=time[i]: 
            dq.append(time[i])
        else:
            answer.append(len(dq))
            dq.clear()
            dq.append(time[i])
            
    if dq:
        answer.append(len(dq)) 
    return answer    
            
                
            