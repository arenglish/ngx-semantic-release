const getApps = require('./get-apps');

module.exports = function verifyNgx(options, context) {
  const { logger } = context;
  const apps = getApps(options, context);

  if (apps.length === 0) {
    logger.log('No angular projects of type "application" exist.');
  } else {
    logger.log(`Found angular apps ${apps.map(a => a.name).join(', ')}`);
  }

  return true;
};
