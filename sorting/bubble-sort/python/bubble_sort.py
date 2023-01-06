import numpy as np


def bubble_sort(arr):
    """ in-place array bubble sorting """
    size = len(arr)
    for i in range(size):
        stop = True
        for j in range(0, size-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                stop = False
        if stop:
            break
    return arr


if __name__ == '__main__':
    original = np.round(np.random.random(100) * 100).astype('int')
    sorted = bubble_sort(original.copy())
    print(f'original:\n\t{original}\n\nsorted:\n\t{sorted}\n')
