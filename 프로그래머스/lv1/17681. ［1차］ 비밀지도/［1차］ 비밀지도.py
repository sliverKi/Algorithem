def solution(n, arr1, arr2):
    answer = []
    new=0
    temp=0
    for i in range(len(arr1)):#진수 변환
        new=bin(arr1[i] | arr2[i])[2:] 
        temp=new.zfill(n)
        temp=temp.replace("1","#")
        temp=temp.replace("0"," ")
        answer.append(temp)
    return answer