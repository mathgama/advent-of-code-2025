import { readInput } from '../utils.js'

const input = readInput('./src/day03/input.txt')

const isLastBaterry = (batteryBank, index) => {
  if (index == batteryBank.length - 1) return true
}

const enoughBatteriesAhead = (batteryBank, bankIndex, joltageIndex) => {
  if (batteryBank.length - bankIndex >= 12 - joltageIndex) return true
}

const firstStar = () => {
  let result = 0

  input.forEach((batteryBank) => {
    let tens = 0
    let units = 0

    for (let i = 0; i < batteryBank.length; i++) {
      if (batteryBank[i] > tens && !isLastBaterry(batteryBank, i)) {
        tens = batteryBank[i]
        units = batteryBank[i + 1]
      } else if (batteryBank[i] > units) units = batteryBank[i]
    }

    const bankJoltage = tens + units

    result += +bankJoltage
  })

  console.log('First star: ' + result)
}

const secondStar = () => {
  let result = 0

  input.forEach((batteryBank) => {
    const bankJoltage = Array(12).fill(0)

    for (let bankIndex = 0; bankIndex < batteryBank.length; bankIndex++) {
      for (let joltageIndex = 0; joltageIndex < 12; joltageIndex++) {
        if (
          batteryBank[bankIndex] > bankJoltage[joltageIndex] &&
          enoughBatteriesAhead(batteryBank, bankIndex, joltageIndex)
        ) {
          bankJoltage[joltageIndex] = batteryBank[bankIndex]

          for (let restAhead = joltageIndex + 1; restAhead < 12; restAhead++)
            bankJoltage[restAhead] = 0

          break
        }
      }
    }

    result += +bankJoltage.join('')
  })

  console.log('Second star: ' + result)
}

firstStar()
secondStar()
