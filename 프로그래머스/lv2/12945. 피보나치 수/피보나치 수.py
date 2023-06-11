def solution(n):
    answer = 0
    num=[]
    for i in range(n):
        if i==1:
            num.append(1)
        else:
            num.append(0)
    # print(num)
    for i in range(n):
        # print(i)
        num[i+2]=num[i]+num[i+1]
        # print("num[i+2]: ", num[i+2])
        num.append(num[i+2])
    #     print(num)
    # print(num)

    for i in range(len(num)-(n-2)):
        if i==n:
            return num[i] % 1234567
        