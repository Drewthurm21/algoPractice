def findNeedle(haystack: str, needle: str) -> int:
    #null needle or exact match?
    if not needle or needle == haystack:
        return 0

    #calculate lengths only once
    nl = len(needle)
    hl = len(haystack)

    #haystack can contain needle?
    if nl > hl:
        return -1

    #loop to find first letter of needle in haystack
    i = 0
    while i <= (hl - nl):
        if haystack[i] == needle[0]:
            j = i
            c = nl
            while c >= 0:
                if haystack[j] != needle[j - i]:
                    i += j
                    break
                if c == 0:
                    return i
                c -= 1
        i += 1
    
    #never found the needle
    return -1


print(findNeedle("hello", "ll")) #2
print(findNeedle("aaaaa", "bba")) #-1
print(findNeedle("", "")) #0
print(findNeedle("a", "a")) #0
print(findNeedle("mississippi", "issip")) #4
print(findNeedle("leetcode", "leeto")) #-1