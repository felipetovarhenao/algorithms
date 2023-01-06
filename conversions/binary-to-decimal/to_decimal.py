from random import randint


def to_decimal(bin: list) -> int:
    """ convert binary array to decimal """
    size = len(bin)
    return sum([x << (size - i - 1) for i, x in enumerate(bin)])


def random_binary():
    return [1] + [randint(0, 1) for _ in range(randint(0, 6))]


def as_str(seq):
    y = ''
    for x in seq:
        y += str(x)
    return y


if __name__ == '__main__':
    print()
    for _ in range(10):
        bin = random_binary()
        dec = to_decimal(bin)
        print(f'binary: {as_str(bin)}\t-->\tdecimal: {dec}')
    print()
