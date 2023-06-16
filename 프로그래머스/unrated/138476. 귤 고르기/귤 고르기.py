
def solution(k, tangerine):
    answer = 0
    dic={}
    for i in tangerine:
        if i in dic:
            dic[i]+=1
        else:
            dic[i]=1
    new_dic=dict(sorted(dic.items(),key=lambda x:x[1], reverse=True))#갯수를 기준으로 내림차순 정렬
    count=0
    for i in new_dic.items():
        if count+i[1] < k:
            count+=i[1]
            answer+=1
        elif count+i[1]==k:
            answer+=1
            return answer
        else:    
            answer+=1
            return answer
            