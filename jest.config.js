module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js'],
  testMatch: ['**/__tests__/**/*.test.js']
};
