def Xor(a, b):
    if a == True and b==True:
        return False
    else:
        return True
    
arr = list(map(int, input().split()))
print(int(Xor(arr[0], arr[1])))