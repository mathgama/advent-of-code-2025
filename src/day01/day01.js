import { readInput } from '../utils.js'

const input = readInput('./src/day01/input.txt')

const firstStar = () => {
  let password = 0
  let dialPointingAt = 50

  input.forEach((rotation) => {
    const direction = rotation.slice(0, 1)
    const numberOfClicks = +rotation.slice(1)

    switch (direction) {
      case 'L':
        dialPointingAt -= numberOfClicks
        break
      case 'R':
        dialPointingAt += numberOfClicks
        break
    }

    dialPointingAt = dialPointingAt % 100

    if (dialPointingAt == 0) password += 1
  })

  console.log(password)
}

firstStar()
