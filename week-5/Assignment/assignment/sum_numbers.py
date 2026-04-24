def sum_numbers(N):
    total = 0

    for i in range(1, N + 1):
        if i > 50:
            print("Loop stopped early at:", i)
            break
        total += i

    return total


num = int(input("Enter a number: "))
result = sum_numbers(num)

print("Sum of numbers from 1 to", num, "is:", result)