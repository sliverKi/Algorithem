import sys
sys.setrecursionlimit(10000000)
def solution(k, room_number): 
    rooms=dict()#{방번호 : 바로 다음 방 번호}
    for num in room_number:
        checkin = emptyroom(num,rooms)#checkin: 1,3,4,2,5,6
    return list(rooms.keys())
    
def emptyroom(cnt, rooms):
    if cnt not in rooms.keys():#빈방
        rooms[cnt]=cnt+1
        return cnt
    empty=emptyroom(rooms[cnt], rooms)
    rooms[cnt]=empty+1
    return empty
    