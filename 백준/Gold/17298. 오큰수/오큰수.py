import sys

N = int(input())
arr = list(map(int, sys.stdin.readline().split()))
stack = [0]
ans = [-1]*N
for i in range(N):
    while stack and arr[stack[-1]]<arr[i]:
        ans[stack.pop()]=arr[i]
    stack.append(i)
print(*ans)
