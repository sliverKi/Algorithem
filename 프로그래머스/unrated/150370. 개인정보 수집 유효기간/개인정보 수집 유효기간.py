def solution(today, terms, privacies):
    answer = []
    term={}
    y,m,d=today.split('.') #2020(y).01(m).01(d)
    today=int(y)*12*28+int(m)*28+int(d)
    for i in terms: #terms_list -> dictionary
        term[i[0]] = int(i[2:])*28
    print(term)    
    for i, v in enumerate(privacies):
         #i=index v=value
        y,m,d=v.split('.')
        d,c=d.split( )
        print("c",c)
        rcd=int(y)*12*28+int(m)*28+int(d)
        if rcd+ term[c]<= today:
            answer.append(i+1)
    return answer      
    