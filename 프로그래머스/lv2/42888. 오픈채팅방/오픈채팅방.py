def solution(record): #dfs
    answer = []
    dict_who={}
    commands=[]
    for r in record:
        r = r.split()
        if r[0]=="Enter":
            dict_who[r[1]]=r[2]
            commands.append([1, r[1]])
        elif r[0]=="Change":
            dict_who[r[1]] = r[2]
        else:
            commands.append([0, r[1]])
    for command in commands:
        print(command[0])
        if command[0]==1:
            answer.append(dict_who[command[1]] + "님이 들어왔습니다.")
        elif command[0]==0:
            answer.append(dict_who[command[1]] + "님이 나갔습니다.")
    return answer          