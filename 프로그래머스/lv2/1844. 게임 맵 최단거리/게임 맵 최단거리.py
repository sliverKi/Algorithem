from collections import deque
def solution(graph):
    
    row=len(graph)
    col=len(graph[0])
    
    def bfs(a,b):
        queue=deque()
        queue.append([a,b])
        while queue:
            x,y=queue.popleft()
            dx=[1,-1,0,0] #이동벡터 (상하좌우)
            dy=[0,0, -1,1]
            for i in range(4):
                nx=x+dx[i]#이동
                ny=y+dy[i]#이동
                if nx<0 or ny<0 or nx>=row or ny>=col: #범위 밖인 경우
                    continue
                if graph[x][y]==0:#벽인경우
                    continue
                if graph[nx][ny]==1:#방문한적이 한번도 없어 
                    graph[nx][ny]=graph[x][y]+1 #이동 +1  
                    queue.append([nx, ny]) #큐에 저장   
        
        if graph[row-1][col-1]==1:
            return -1
        else:
            return graph[row-1][col-1]
    answer = bfs(0,0)
    return answer
        