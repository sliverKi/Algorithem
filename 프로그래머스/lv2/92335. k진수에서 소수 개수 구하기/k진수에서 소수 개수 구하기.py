def solution(n, k):
    
    words=""
    
    while n!=0:
        words=str(n%k)+words
        n//=k
    words=words.split('0')#['211', '2', '1', '1', '11']
    print(words)
    count = 0
    for word in words:
        if len(word)==0:#공백
            continue
        if int(word)<2:#한자리
            continue
        #소수 구하기
        print(10)
        prime=True
        
        for i in range(2, int(int(word)**0.5)+1):   
            # print(int(word))
            if int(word)%i==0:
                prime=False
                break
        if prime:        
            count+=1
            # print(count)
    return count