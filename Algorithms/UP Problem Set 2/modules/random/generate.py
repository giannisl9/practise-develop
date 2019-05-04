import itertools
import random

random.seed(1046836)
tmp = list(itertools.permutations(range(0,999), 2))
sample_space = []

def generate_edges():
    for elem in tmp:
        for x in range(10, 50):
            sample_space.append((elem[0], elem[1], x))
    return random.sample(sample_space, 10000)

