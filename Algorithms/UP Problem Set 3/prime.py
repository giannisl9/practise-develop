import math

def is_prime(n):
    if n % 2 == 0:
        return False
    for i in range(3, int(math.ceil(math.sqrt(n)))+1, 2):
        if n % i == 0:
            return False
    return True

def next_prime(n):
    while is_prime(n) is False:
        n = n + 1
    return n
