module.exports = {
  verbose: true,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  transform: {
    "^.+\\.tsx?$": [
      "jest-preset-angular",
      {
        tsconfig: "<rootDir>/tsconfig.spec.json",
        stringifyContentPathRegex: "\\.html$",
      },
    ],
  },
};
