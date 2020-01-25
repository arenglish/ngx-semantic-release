const child = require('child_process');

module.exports = function buildApp(appName, options, context) {
  const { logger } = context;

  const build = options.buildCommand.replace('$app', appName);
  const fullCommandWithOptions = `${build} ${options.buildOptions.join(' ')}`;

  logger.log(`Building app ${appName} with command "${fullCommandWithOptions}"`);

  child.execSync(fullCommandWithOptions, {
    stdio: "inherit"
  });
};
