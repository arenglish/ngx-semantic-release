const child = require("child_process");
const getApps = require('./get-apps');
const buildApp = require('./build-app');

module.exports = async function prepareNgx(options, context) {
  const { logger } = context;
  const apps = getApps(options, context);

  apps.forEach(app => {
    buildApp(app.name, options, context);
  })

  return true;
};
