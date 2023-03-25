import numpy
a = int(input())
arr=list(map(int, input().split()))
found = False
for i in range(1, len(arr)):
    if numpy.sign(arr[i]) == numpy.sign(arr[i-1]):
        print("YES")
        found = True
        
if found == False:
    print("NO")