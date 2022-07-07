const path = require("path");

module.exports = {
  devServer: {
    proxy: {
      "/blogs": {
        target: "http://localhost:5000/",
      },
    },
  },
};
