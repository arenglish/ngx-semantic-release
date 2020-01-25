const { failNgx, prepareNgx, successNgx, verifyNgx, resolveConfigNgx } = require("./lib");

let verified;

async function verifyConditions(pluginConfig, context) {
  resolveConfigNgx(pluginConfig, context);

  verifyNgx(pluginConfig, context);
  verified = true;
}

async function prepare(pluginConfig, context) {
  resolveConfigNgx(pluginConfig, context);

  if (!verified) {
    verifyNgx(pluginConfig, context);
    verified = true;
  }

  return prepareNgx(pluginConfig, context);
}

async function success(pluginConfig, context) {
  resolveConfigNgx(pluginConfig, context);

  if (!verified) {
    verifyNgx(pluginConfig, context);
    verified = true;
  }

  await successNgx(pluginConfig, context);
}

async function fail(pluginConfig, context) {
  resolveConfigNgx(pluginConfig, context);

  if (!verified) {
    verifyNgx(pluginConfig, context);
    verified = true;
  }

  await failNgx(pluginConfig, context);
}

module.exports = { verifyConditions, prepare, success, fail };
