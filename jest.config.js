module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'ts-jest',
  coveragePathIgnorePatterns: ['node_modules', 'dist'],
};
