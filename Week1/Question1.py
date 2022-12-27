#Q1
question=['Q2','Q3','Q4','Q5',
'Q6_1','Q6_2','Q6_3','Q6_4','Q6_5','Q6_6', 
'Q6_7','Q6_8','Q6_9','Q6_10','Q6_11','Q6_12',
'Q7_1','Q7_2','Q7_3','Q7_4','Q7_5', 
'Q7_6','Q7_7','Q7_8','Q7_9','Q7_10','Q8','Q9', 
'Q10_1','Q10_2','Q10_3']
 
search='_'                               # 찾을 요소
for i in range(len(question)):
    for word in question:                # list에서 각 요소를 꺼냄
        if search in word:               # 꺼낸 요소에 찾고자 하는 요소가 있니? 
            question.remove(word)        # 만약 있다면 그 요소는 리스트에서 제거해
print(question)                          # 제거되고 남아있는 요소들 출력해


