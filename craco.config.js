const path = require("path");
const sassResourcesLoader = require("craco-sass-resources-loader");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          "./src/assets/styles/vars/animations.scss",
          "./src/assets/styles/vars/borders.scss",
          "./src/assets/styles/vars/colors.scss",
        ],
      },
    },
  ],
};
