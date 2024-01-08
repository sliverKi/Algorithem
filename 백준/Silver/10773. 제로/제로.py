K=int(input())
A=[0]*K
stack=[]
for i in range(K):
    A[i]=int(input())
    if A[i]==0:
        stack.pop()
    else:
        stack.append(A[i])
print(sum(stack))