def to_binary(dec):
    """ recursively convert decimal number to binary """
    bin = []
    quotient = dec // 2
    remainder = dec % 2
    if quotient > 0:
        bin += to_binary(quotient)
    bin.append(remainder)
    return bin


def as_str(seq):
    y = ''
    for x in seq:
        y += str(x)
    return y


if __name__ == '__main__':
    [print(as_str(to_binary(x))) for x in list(range(16))]
