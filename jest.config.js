module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': '<rootDir>/scripts/preprocessor.js'
    },
    testMatch: ['**/__tests__/*.+(ts|tsx|js)']
}
