a = int(input())
deg = 0
a = str(a)
ans = 0
for i in range(len(a)):
    ans += int(a[len(a)-i-1]) * (2**deg)
    deg += 1
print(ans) 