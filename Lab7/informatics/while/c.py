a = int(input())

i = 1

while i<a+1:
    if i==1: 
        print(i)
    
    else:
        temp = i
        while temp != 0:
            if temp%2 ==0:
                temp/=2
            else:
                break
        if temp == 1:
            print(i)
    
    i += 1