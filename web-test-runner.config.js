module.exports = {
  nodeResolve: true,
  sessionStartTimeout: 30000,
  coverageConfig: {
    threshold: {
      statements: 80,
      branches: 70,
      functions: 70,
      lines: 80,
    },
  },
};
