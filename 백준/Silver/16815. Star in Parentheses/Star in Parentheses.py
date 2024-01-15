n = list(input())
stack=[]

for i in n:
    if i==')'and stack[-1]=='*':
        stack.append(i)
    elif i==')'and stack[-1]=='(':
        stack.pop()
    else:
        stack.append(i)
cnt = stack.count('(')
print(cnt)