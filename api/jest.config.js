module.exports = {
    collectCoverage: false,
    collectCoverageFrom: ['<rootDir>/**/*.ts', '!<rootDir>/**/*.__tests__.ts'],
    coverageReporters: ['html', 'lcov', 'text', 'text-summary'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/__tests__/**/*.spec.ts'],
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/api/$1',
    },
};