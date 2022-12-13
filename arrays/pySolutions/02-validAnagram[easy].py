'''
Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a 
word or phrase formed by rearranging the letters of a different word or phrase, typically using all 
the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters ? How would you adapt your solution to such a case?
'''


def valid_anagram(s, t):
    c = {letter: s.count(letter) for letter in s}
    for char in t:
        if char in c.keys():
            if char not in c or c[char] == 0:
                return False
            else:
                c[char] = c[char] - 1

    return sum(c.values()) == 0


print((valid_anagram("nagaram", "anagram")))


def valid_anagrams(s, t):
    letters = [0 for i in range(26)]

    for char in s:
        i = ord(char) - 97
        letters[i] = letters[i] + 1

    for char in t:
        i = ord(char) - 97
        if letters[i] == 0:
            return False
        letters[i] = letters[i] - 1

    return sum(letters) == 0


print((valid_anagrams("nagaram", "anagram")))


def valid_anagram_unicode(s, t):
    letters = [0 for i in range(26)]
    sarr = s.split(',')
    tarr = t.split(',')

    for char in sarr:
        i = int(char) - 97
        letters[i] = letters[i] + 1

    for char in tarr:
        i = int(char) - 97
        if letters[i] == 0:
            return False
        letters[i] = letters[i] - 1

    return sum(letters) == 0


print(valid_anagram_unicode('110,97,103,97,114,97,109', '97,110,97,103,97,114,109'))
