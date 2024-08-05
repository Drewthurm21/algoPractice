

def lengthOfLastWord(s):
    l = len(s)
    count = 0
    
    if l == 1:
        return 1 if s[0] != " " else 0
            
    i = l -1
    while s[i] == " ":
        i -= 1
        if i < 0:
            return 0

    while s[i] != " ":
        if count == l:
            return count
        count += 1
        i -= 1

    return count


print(lengthOfLastWord("Hello World")) # 5
print(lengthOfLastWord(" ")) # 0
print(lengthOfLastWord("a ")) # 1
print(lengthOfLastWord("a")) # 1
print(lengthOfLastWord("a b")) # 1
print(lengthOfLastWord("asdf")) # 4