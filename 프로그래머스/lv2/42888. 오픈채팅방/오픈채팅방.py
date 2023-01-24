def solution(record): #dfs
    answer = []
    dict_who={}
    access=[]
    for r in record:
        r = r.split()
        #print(r)
        if r[0]=="Enter":
            dict_who[r[1]]=r[2]
            #print("dict_who",dict_who)
            access.append([1, r[1]])
            #print("access", access)
        elif r[0]=="Change":
            dict_who[r[1]] = r[2]
        else:
            access.append([0, r[1]])
    #print("access :", access)
    #access : [[1, 'uid1234'], [1, 'uid4567'], [0, 'uid1234'], [1, 'uid1234']]        
    for acc in access:
        if acc[0]==1:
            answer.append(f"{dict_who[acc[1]]}님이 들어왔습니다.")
        elif acc[0]==0:
            answer.append(f"{dict_who[acc[1]]}님이 나갔습니다.")
    return answer          