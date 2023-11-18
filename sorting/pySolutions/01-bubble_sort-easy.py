def bubble_sort(list):
    swapped = True
    while swapped:
        swapped = False
        for i in range(len(list) - 1):
            if list[i] > list[i+1]:
                temp = list[i]
                list[i] = list[i+1]
                list[i+1] = temp
                swapped = True
    return list


print(bubble_sort([2, 9, 3, 3, 4, 5, 76, 96, 453, 46, 8, 6, ]))
