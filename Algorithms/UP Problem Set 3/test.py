from generator import generate_input

for client in generate_input(10):
    print(client.card + ' ' + str(client.amount))
