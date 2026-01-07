function consecutiveSubstrings(string) {
  const results = [];

  // Use the parameter 'string' instead of the undefined 'str'
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      // Extract and push the substring
      results.push(string.slice(i, j));
    }
  }

  // CRITICAL: Return the results so the tests can verify them
  return results;
}

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));
}

module.exports = consecutiveSubstrings;
