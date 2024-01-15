n=list(input())
stack=[0]
cnt=0
for i in n:
    if i==')' and stack[-1]=='(':
        stack.pop()
        stack[0]-=1
    else:
        stack.append(i)
        stack[0]+=1
print(stack[0])