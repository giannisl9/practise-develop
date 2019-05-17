from prime import next_prime
from generator import generate_input

n = 1000000
collisions = 0
size = next_prime(1000)
p = next_prime(60)
table = size * [None]
load_factor = 0.0
occupied = 0
visited = []
res = []
daysVisit = 7 * [0]
daysMap = {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday',
}

def hash(card, m):
    value = 0
    for i, letter in enumerate(card):
        value = value + ord(letter) * (p**i)
    return value % m

def table_doubling():
    global table, size, collisions
    collisions = 0
    tmp = table
    size = next_prime(size*2)
    table = size * [None]
    for trans in tmp:
        if trans is not None:
            insert(trans)

def search(card):
    hashVal = hash(card, size)
    index = hashVal
    while table[index] is not None:
        if table[index]['card'] == card:
            return index
        index = (index + 1) % size

def insert(trans):
    global load_factor, occupied, collisions
    sameCard = False
    hashVal = hash(trans['card'], size)
    index = hashVal
    while table[index] is not None:
        if table[index]['card'] == trans['card']:
            table[index]['visits'].append({
                'amount': trans['visits'][0]['amount'],
                'day': trans['visits'][0]['day']
            })
            sameCard = True
            break
        index = (index + 1) % size
        collisions = collisions + 1

    if sameCard is False:
        table[index] = trans
        occupied = occupied + 1
        load_factor = occupied / size

for trans in generate_input(n):
    if load_factor > 0.5:
        table_doubling()
    insert(trans)

mostVisits = {'card': '', 'number': 0}
mostPaid = {'card': '', 'amount': 0}

for client in table:
    if client is not None:
        clientVisits = len(client['visits'])
        if clientVisits > mostVisits['number']:
            mostVisits['number'] = clientVisits
            mostVisits['card'] = client['card']
        paid = 0
        for visit in client['visits']:
            daysVisit[visit['day']] = daysVisit[visit['day']] + 1
            paid = visit['amount'] + paid
        if paid > mostPaid['amount']:
            mostPaid['card'] = client['card']
            mostPaid['amount'] = paid

mostVisitedDay = {'day': '', 'visits': 0}
for i, visits in enumerate(daysVisit):
    if visits > mostVisitedDay['visits']:
        mostVisitedDay['day'] = i
        mostVisitedDay['visits'] = visits

print("The hash table H is of size {}, has {} places occupied and its load factor is {:.2f}.".format(size, occupied, load_factor))
print("Card {} (hash value: {}) visited {} times and has spent the most ({}). It can be found at H[{}]".format(
    mostPaid['card'], hash(mostPaid['card'], size), len(table[search(mostPaid['card'])]['visits']), mostPaid['amount'], search(mostPaid['card'])
    ))
print("Card {} (hash value: {}) has the most visits ({}) and it can be found at H[{}].".format(mostVisits['card'], hash(mostVisits['card'], size), mostVisits['number'], search(mostVisits['card'])))
print("{} is the day with the most visits ({}).".format(daysMap[mostVisitedDay['day']], mostVisitedDay['visits']))
print("There were {} collisions in the final table.".format(collisions))
