a = int(input())
arr=list(map(int, input().split()))
ans = 0
for i in range(len(arr)):
    temp = arr[i]
    arr[i] = arr[len(arr)-i-1]
    arr[len(arr)-i-1] = temp
    
for i in arr:
    print(i, end = " ")