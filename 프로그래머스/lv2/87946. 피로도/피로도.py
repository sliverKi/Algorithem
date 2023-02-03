from collections import deque
def solution(k, dungeons):
    answer = -1
    queue = deque()
    queue.append((k, []))
    while queue:
        k, visited = queue.popleft()
        for i in range(len(dungeons)):
            a, b = dungeons[i]#a:80, b:20
            if k >= a and i not in visited:
                temp = visited + [i]
                queue.append((k - b, temp))
            else:
                answer = max(answer, len(visited))
    return answer