from collections import defaultdict
def solution(id_list, report, k):
    answer = [0]*len(id_list)
    report=list(set(report))
    dict=defaultdict(list)
    for i in range(len(report)):
        temp=report[i].split()
        dict[temp[1]] += [temp[0]]
    for i in dict.values():
        if len(i)>=k:
            for j in i:
                answer[id_list.index(j)]+=1
    return answer