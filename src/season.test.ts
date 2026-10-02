import { describe, expect, it } from 'vitest'
import { getSeason } from './season.ts'

describe('getSeason', () => {
  it('returns summer in the north and winter in the south for July', () => {
    expect(getSeason(19, 6)).toBe('summer')
    expect(getSeason(-33, 6)).toBe('winter')
  })

  it('returns winter in the north and summer in the south for January', () => {
    expect(getSeason(19, 0)).toBe('winter')
    expect(getSeason(-33, 0)).toBe('summer')
  })
})
