def solution(A,B):
    answer = []
    tmp=0
    # [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    A.sort()
    B.sort(reverse=True)
    
    for i in zip(A,B):
        print(list(i))
        answer.append(i)
    for i in range(len(answer)):    
        
        num=answer[i][0]*answer[i][1]
        tmp+=num

        

    return tmp