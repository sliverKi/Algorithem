def solution(storey):
    answer = 0
    # button=[]
    # for i in range(len(str(storey))):
    #     button.append(10**i)
        
    while storey:
        div=storey%10
        if div==5 and (storey//10)%10>=5 or div>5 :
            storey+=10-div
            answer+=10-div
            #print(storey)
            print(answer)
                
        else:
            answer+=div 
        storey=storey//10
        
    return answer