
def fibonacci_sequence(num, memo={}):
    if num in memo:
        return memo[num]

    if num < 2:
        return 1

    memo[num] = fibonacci_sequence(
        num - 1, memo) + fibonacci_sequence(num - 2, memo)

    return memo[num]


print(fibonacci_sequence(15))
