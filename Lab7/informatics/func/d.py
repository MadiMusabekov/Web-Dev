def Election(x,y,z):
    ans = x+y+z
    if ans < 2:
        return 0
    else:
        return 1
arr = list(map(int, input().split()))
print(Election(arr[0], arr[1], arr[2]))