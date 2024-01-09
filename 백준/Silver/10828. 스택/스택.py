def soluction(inputs):
    stack = []
    answer = ''

    for el in inputs:
        if el[0] == 'push':
            stack.append(el[1])
        elif el[0] == 'pop':
            result = stack.pop() if stack else -1
            answer += str(result) + '\n'
        elif el[0] == 'size':
            result = len(stack)
            answer += str(result) + '\n'
        elif el[0] == 'empty':
            result = 1 if not stack else 0
            answer += str(result) + '\n'
        elif el[0] == 'top':
            result = stack[-1] if stack else -1
            answer += str(result) + '\n'

    print(answer)
   
def main():
    total_count=int(input())
    inputs = []

    for _ in range(total_count):
        command = input().split()
        inputs.append(command)

    soluction(inputs)

if __name__ == "__main__":
    main()