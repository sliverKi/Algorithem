def solution(n):
    #answer = 0
    num=[0]*(2001)
    num[1]=1
    num[2]=2
    if n<3:
        return n
    else:
        for i in range(3, n+1):
            num[i]=(num[i-1] %1234567)+num[i-2]%1234567
    return num[n]%1234567