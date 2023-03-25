def power(a,b):
    for i in range(b-1):
        a*=a
    return a

arr = list(map(int, input().split()))
print(power(arr[0], arr[1]))