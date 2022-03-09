export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/jestSvgTransform.js",
  },
};
