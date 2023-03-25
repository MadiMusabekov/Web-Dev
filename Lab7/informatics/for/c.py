import math
a = int(input())
b = int(input())

for i in range(a,b):
    temp = i**1/2
    if i == temp**2:
        print(i, end=" ")
