def solution(s):
    cnt=0
    for i in range(len(s)):
        if s[i]=='(': 
            cnt+=1
        else: #i==}
            cnt-=1
        if cnt <0: 
            return False
    if cnt > 0: return False    
    else: return True
            