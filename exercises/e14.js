import { data } from "../data/data";

// SPACE DATA EXERCISE 14
// Return the sum of orbital periods of all asteroids
// Return example: 234234.234

export function getOrbitalPeriodsSum(data) {
  const asteroidOrbitalPeriods = data.asteroids.reduce(
    (sum, asteroids) => sum + (asteroids.orbitalPeriod ?? 0),
    0
  );
  return asteroidOrbitalPeriods;
}

/*   const asteroidOrbitalPeriods = data.asteroids.reduce(function (
    sum,
    asteroids
  ) {
    return sum + asteroids.orbitalPeriod;
  },
  0);

  return asteroidOrbitalPeriods; */

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
