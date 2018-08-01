const webpack = require('webpack');
// const ip = require('ip');

const ENV = process.env.ENV || 'local';
const PROTOCOL = 'https';
// const hostIP = ip.address() || 'localhost';
const now = new Date();

const defaultDomain = {
  __TIMESTAMP__: new Date().getTime(),
  __ENV__: ENV,
  __DEVELOPMENT__: false,
  __SERVER_URL__: `${PROTOCOL}://test.oa.style.me`,

};


const config = {
  local: {
    domain: Object.assign({}, defaultDomain, {
      __DEVELOPMENT__: true,
    }),
  },
  dev: {
    domain: Object.assign({}, defaultDomain, {
      __DEVELOPMENT__: true,
    }),
  },
  stage: {
    domain: Object.assign({}, defaultDomain, {
      __SERVER_URL__: `${PROTOCOL}://beta.style.me`,
    }),
  },
  production: {
    domain: Object.assign({}, defaultDomain, {
      __SERVER_URL__: `${PROTOCOL}://www.style.me`,
    }),
  },
};

function getEnvConfig() {
  if (ENV && config[ENV]) {
    return config[ENV];
  }
  return config.local;
}

const build = {
  defineJsConstants() {
    const constants = getEnvConfig().domain;

    Object.keys(constants).forEach((key) => {
      constants[key] = JSON.stringify(constants[key]);
    });

    return new webpack.DefinePlugin(constants);
  },
  getDomainConfig() {
    return getEnvConfig().domain;
  },
};

module.exports = build;
