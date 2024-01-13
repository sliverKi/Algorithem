def soluction(arr):
    stack = []
    cnt =0
    idx =0
    for idx in range(len(arr)):
        
        if arr[idx] == '(':
            stack.append('(')
        else:
            if arr[idx-1]=='(':
                stack.pop()
                cnt += len(stack)
            else:
                stack.pop()
                cnt+=1
        
    print(cnt)

arr = list(input())
soluction(arr)