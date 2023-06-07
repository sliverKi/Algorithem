def solution(cards1, cards2, goal):
    
    card1_start=0; 
    card2_start=0
    answer="Yes"
    for word in goal:
        if card1_start<len(cards1) and cards1[card1_start]==word:
            card1_start+=1
        elif card2_start<len(cards2) and cards2[card2_start]==word:
            card2_start+=1
        else:
            answer="No"
            break
    return answer       
            