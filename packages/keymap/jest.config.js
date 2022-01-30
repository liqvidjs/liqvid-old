module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['dist'],
	coverageReporters: ['json-summary'],
	transform: {}
};
