def solution(n):
    answer = 0
    c=bin(n).count('1')
    for i in range(n+1, 10000001):
        if bin(i).count('1')==c:
            break
    return i 