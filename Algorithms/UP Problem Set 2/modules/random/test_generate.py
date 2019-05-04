from generate import generate_edges

class Test:
    def __init__(self, number_of_vertices, number_of_edges, min_value, max_value):
        self.number_of_vertices = number_of_vertices
        self.number_of_edges = number_of_edges
        self.min_value = min_value
        self.max_value = max_value

random_tests = [Test(5, 10, 1, 2), Test(10, 20, 1, 1), Test(100, 200, 1, 1), Test(100, 150, 5, 10), Test(1000, 4000, 2, 2)]

for n, test in enumerate(random_tests):
    number_of_vertices = test.number_of_vertices
    number_of_edges = test.number_of_edges
    min_value = test.min_value
    max_value = test.max_value
    edges = generate_edges(number_of_vertices, number_of_edges, min_value, max_value)

    found_edges = 0
    check_edges = 'OK'
    check_min_value = 'OK'
    found_max_value = min_value
    found_min_value = max_value
    check_max_value = 'OK'
    test_res = 'Passed'
    count_edges = 0
    duplicate_edges = 'No'

    for i, elem1 in enumerate(edges):
        found_edges += 1
        if elem1[2] < found_min_value:
            found_min_value = elem1[2]
        if elem1[2] > found_max_value:
            found_max_value = elem1[2]
        for elem2 in edges[i+1:]:
            if elem1[0] == elem2[0] and elem1[1] == elem2[1]:
                test_res = 'Failed'
                duplicate_edges = 'Yes'
    
    if found_edges != number_of_edges:
        test_res = 'Failed'
        check_edges = 'Expected: ' + str(number_of_edges) + ' | Found: ' + str(found_edges)

    if found_max_value > max_value:
        test_res = 'Failed'
        check_max_value = 'Expected: ' + str(max_value) + ' | Found: ' + str(found_max_value)

    if found_min_value < min_value:
        test_res = 'Failed'
        check_min_value = 'Expected: ' + str(min_value) + ' | Found: ' + str(found_min_value)

    print('Test ' + str(n+1) + ' | ' + test_res)
    print('Number of Edges: ' + check_edges)
    print('Duplicate Edges: ' + duplicate_edges)
    print('Min Value: ' + check_min_value)
    print('Max Value: ' + check_max_value)

    print()
