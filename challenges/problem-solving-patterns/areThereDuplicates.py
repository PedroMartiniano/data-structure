def areThereDuplicates(*args):
    if not args:
        return False

    obj = {}

    for item in args:
        obj[item] = obj.get(item, 0) + 1

        if obj[item] > 1:
            return True

    return False

print(areThereDuplicates(1, 2, 3, 5, 2))

def teste(*args):
    setArgs = {*args}

    print(setArgs)

    if (len(setArgs) != len(args)):
        return True
    else:
        return False
    
print(teste(1, 2, 3, 5))