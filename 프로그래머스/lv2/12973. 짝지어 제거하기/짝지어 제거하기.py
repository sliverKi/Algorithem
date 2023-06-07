def solution(s):
    stack=[]
    # [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    for i in s:
        if stack and stack[-1]==i:
            stack.pop()
        else: stack.append(i)
    if stack:
        return 0
    else: 
        return 1
 