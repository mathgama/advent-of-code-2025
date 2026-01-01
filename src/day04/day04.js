import { readInput } from '../utils.js'

const input = readInput('./src/day04/input.txt')

const countAdjacentRollsInLine = (line, rollPosition) => {
  let rollsCounter = 0

  if (!line) return 0

  for (let x = rollPosition - 1; x <= rollPosition + 1; x++) {
    if (!line?.[x]) continue

    const position = line[x]

    if (position == '@') rollsCounter++
  }

  return rollsCounter
}

const firstStar = () => {
  let result = 0

  for (let x = 0; x < input.length; x++) {
    const line = input[x]

    for (let y = 0; y < line.length; y++) {
      const position = line[y]

      if (position == '.') continue

      let adjacentRolls = 0

      adjacentRolls += countAdjacentRollsInLine(input[x - 1], y)
      adjacentRolls += countAdjacentRollsInLine(input[x], y)
      adjacentRolls += countAdjacentRollsInLine(input[x + 1], y)

      if (adjacentRolls < 5) result++
    }
  }

  console.log('First star: ' + result)
}

firstStar()
