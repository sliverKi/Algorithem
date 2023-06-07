def solution(s):
    result=[]
    s=s.lower()
    s=list(map(str, s.split(" ")))
    for i in s:
        if not i.isalpha():
            result.append(i)
        elif i.isalpha():
            i=i[0].upper()+i[1:]
            result.append(i)
    # print(result)
    return " ".join(result)
