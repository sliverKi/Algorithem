n = int(input())
case=[]
for i in range(n):
    case.append(input())

for idx in range(len(case)):
    words=case[idx].split()
    print(f"Case #{idx+1}: {' '.join(list(reversed(words)))}")