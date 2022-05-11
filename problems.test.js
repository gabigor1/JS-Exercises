/* eslint-disable no-undef */
const fns = require('./longestSequence')
const sav = require('./savings')
const rev = require('./reverseString')
const Time = require('./time')

describe('longestSequence', () => {
  test('should return longest sequence where the same letter occurs continuously.', () => {
    expect(fns.longestSequence('dghhhmhmx')).toEqual({ h: 3 })
    expect(fns.longestSequence('dhkkhhKKKt')).toEqual({ k: 3 })
    expect(fns.longestSequence('aBbBadddaaa')).toEqual({ b: 3 })
  })
})

describe('savings', () => {
  test('should return savings account balance', () => {
    expect(sav.balance(10000, 1, 20000, 1, 2)).toBeGreaterThanOrEqual(10201)
    expect(sav.balance(25000, 2, 20000, 1, 2)).toBeGreaterThanOrEqual(25904.5)
    expect(sav.balance(19800, 2, 20000, 1, 2)).toBeGreaterThanOrEqual(20597.96)
  })
})

describe('reverseString', () => {
  test('should return a string reversed', () => {
    expect(rev.reverseString('abcb')).toEqual('bcba')
    expect(rev.reverseString('test')).toEqual('tset')
    expect(rev.reverseString('racecar')).toEqual('racecar')
  })
})

describe('time', () => {
  const time = new Time(1, 30, 20)
  test('should Time', () => {
    expect(time.timeString()).toEqual('01:30:20')
  })
  test('should Time', () => {
    time.scale(400)
    expect(time.timeString()).toEqual('01:31:00')
  })
  const time2 = new Time(1, 100, 0)
  test('should Time', () => {
    expect(time2.timeString()).toEqual('02:40:00')
  })
})