a = int(input())

ans = ""
a = str(a)
for i in range(len(a)):
    ans += a[len(a)-i-1]
    
print(int(ans))

