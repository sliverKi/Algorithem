def soluction(filtered_texts):
    stack = []
    ans=[]
    
    for texts in filtered_texts:
        stack=[]
        is_compare = True
        for text in texts:
            if text == '(' or text=='[':
                stack.append(text)
            elif text == ')':
                if stack and stack[-1]=='(':
                    stack.pop()
                else:
                    is_compare = False
                    break
            elif text == ']':
                if stack and stack[-1]=='[':
                    stack.pop()
                else:
                    is_compare = False
                    break
        if not stack and is_compare:
            ans.append("yes")
        else:
            ans.append("no")
    print("\n".join(ans))

def filter_brackets(text):
    filtered_text = " ".join(filter(lambda char: char in '()[]', text)).split()
    return filtered_text

texts=[]
while True:
    text = input()
    if text=='.':
        break
    texts.append(text)

filtered_texts = list(map(filter_brackets, texts))
soluction(filtered_texts)