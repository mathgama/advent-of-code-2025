import { readInput } from '../utils.js'

const input = readInput('./src/day03/input.txt')

const getLastBattery = (batteryBank) => {
  return batteryBank[batteryBank.length - 1]
}

const firstStar = () => {
  let result = 0

  input.forEach((batteryBank) => {
    let tens = 0
    let units = 0

    for (let i = 0; i < batteryBank.length - 1; i++) {
      if (batteryBank[i] > tens) {
        tens = batteryBank[i]
        units = batteryBank[i + 1]
      } else if (batteryBank[i] > units) units = batteryBank[i]
    }

    if (getLastBattery(batteryBank) > units) units = getLastBattery(batteryBank)

    const bankJoltage = tens + units

    result += +bankJoltage
  })

  console.log('First star: ' + result)
}

firstStar()
