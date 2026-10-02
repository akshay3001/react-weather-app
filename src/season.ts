export type Season = 'summer' | 'winter'

// Returns the season for a latitude and a 0-based month (0 = January).
// April to September is summer in the northern hemisphere and winter in the southern one.
export function getSeason(lat: number, month: number): Season {
  const northernSummer = month > 2 && month < 9
  return northernSummer === lat > 0 ? 'summer' : 'winter'
}
