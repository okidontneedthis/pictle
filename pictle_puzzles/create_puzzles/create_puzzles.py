import random
from words import solvable, guessable

numbers = ['0', '1', '2']
weights = [20, 10, 5]

rows = 6
cols = 5
puzzle = [[0 for _ in range(cols)] for _ in range(rows)]

for y in range(rows):
	for x in range(cols):
		puzzle[y][x] = random.choices(numbers, weights)

for row in puzzle:
    for element in row:
        print(element, end=" ") # Prints elements of a row separated by spaces
    print() # Moves to the next line after printing each row

print(random.choice(solvable))