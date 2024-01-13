import sys
word = list(input())
stack = [] 
m = int(input())
for i in range(m):
    command = sys.stdin.readline().split()
    
    key = command[0].upper()
    if key=='L':
        if word:
            stack.append(word.pop())
    elif key=='D':
        if stack:
            word.append(stack.pop())
    elif key=='B':
        if word:
            word.pop()
    elif key=='P':
        word.append(command[1])

print("".join(word + list(reversed(stack))))
