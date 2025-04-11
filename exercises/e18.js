/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const allDiscoveryYears = data.asteroids
    .filter((asteroids) => asteroids.discoveryYear)
    .map((year) => year.discoveryYear);

  const yearCounts = allDiscoveryYears.reduce((acc, year) => {
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const yearCountPairs = Object.entries(yearCounts);

  const greatestYear = yearCountPairs.reduce((max, current) => {
    return current[1] > max[1] ? current : max;
  })[0];
  console.log(greatestYear);
  return parseInt(greatestYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
