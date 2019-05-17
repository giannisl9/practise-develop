import random
random.seed('1046836')

fixedDigits = '1234567890123456'

def generate_input(n):
    trans = []
    for i in range(n):
        amount = random.randint(10, 100)
        day = random.randint(0,6)
        place = random.sample(range(0,16), 4)
        card = fixedDigits[:place[0]] + 'A' + fixedDigits[place[0]+1:]
        card = card[:place[1]] + 'B' + card[place[1]+1:]
        card = card[:place[2]] + 'C' + card[place[2]+1:]
        card = card[:place[3]] + 'D' + card[place[3]+1:]
        trans.append({'card': card, 'visits': [{'amount': amount, 'day': day}]})
    return trans
