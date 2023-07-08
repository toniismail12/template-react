const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@pages": "src/pages",
    "@assets": "src/assets",
    "@app": "src/app",
    "@layouts": "src/layouts",
    "@components": "src/components",
    "@contexts": "src/contexts",
    "@services": "src/services",
    "@api": "src/api",
    "@api-routes": "src/api-routes",
    "@controllers": "src/controllers",
    "@variable": "src/variable",
  })(config);

  return config;
};
