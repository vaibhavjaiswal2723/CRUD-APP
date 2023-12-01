module.exports = {
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
};