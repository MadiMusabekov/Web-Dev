a = int(input())
arr=list(map(int, input().split()))
ans = 0
for i in range(len(arr)):
    if arr[i] > 0:
        ans += 1
        
print(ans)