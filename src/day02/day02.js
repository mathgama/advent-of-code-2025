import { readInputBySeparator } from '../utils.js'

const input = readInputBySeparator('./src/day02/input.txt', ',')

const getFirstHalf = (str) => {
  const midpoint = Math.floor(str.length / 2)
  return str.slice(0, midpoint)
}

const getSecondHalf = (str) => {
  const midpoint = Math.floor(str.length / 2)
  return str.slice(midpoint)
}

const firstStar = () => {
  let result = 0

  input.forEach((range) => {
    const [rangeBegin, rangeEnd] = range.split('-')

    for (let i = +rangeBegin; i <= rangeEnd; i++) {
      const str = i.toString()
      if (str.length % 2 != 0) continue
      if (getFirstHalf(str) == getSecondHalf(str)) result += +i
    }
  })

  console.log('First star: ', result)
}

const secondStar = () => {
  let result = 0

  input.forEach((range) => {
    const [rangeBegin, rangeEnd] = range.split('-')
    const regex = /^(\d+)\1{1,}$/

    for (let i = +rangeBegin; i <= rangeEnd; i++) {
      const str = i.toString()
      if (regex.test(str)) result += i
    }
  })

  console.log('Seconds star: ', result)
}

firstStar()
secondStar()
