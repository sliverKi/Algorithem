n= list(input())
num_check=0
stack=[]
max=0; sum=0

for i in range(len(n)):
    if n[i] =='(': 
        sum+=1
    elif n[i] =='{':
        sum+=2
    elif n[i]=='[':
        sum+=3

    elif n[i] ==')':
        sum-=1
    elif n[i] =='}':
        sum-=2
    elif n[i] ==']':
        sum-=3
    elif n[i].isdigit():
        if sum>max:
            max=sum 
print(max)