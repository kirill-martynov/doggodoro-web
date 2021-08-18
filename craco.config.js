const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@core": path.resolve(__dirname, "./src/core"),
      "@screens": path.resolve(__dirname, "./src/screens"),

      "@Home": path.resolve(__dirname, "src/screens/Home"),
      "@Settings": path.resolve(__dirname, "src/screens/settings"),

      "src": path.resolve(__dirname, "./src"),
    },
  },
};
