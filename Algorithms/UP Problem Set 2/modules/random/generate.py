import itertools
import random

random.seed(1046836)

def generate_edges(number_of_vertices, number_of_edges, val_min, val_max):
    tmp = list(itertools.permutations(range(0,number_of_vertices), 2))
    sample_space = []
    for elem in tmp:
        value = random.randint(val_min, val_max)
        sample_space.append((elem[0], elem[1], value))
    return random.sample(sample_space, number_of_edges)
