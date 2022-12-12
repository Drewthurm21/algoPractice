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
            if c[char] == 0:
                return False
            c[char] = c[char] - 1
        else:
            return False

    return sum(c.values()) == 0


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

    return True


print(valid_anagrams('anagram', 'nagaram'))
