module.exports = async function resolveConfigNgx(options, context) {
  options.apps = options.apps || [];
  options.buildCommand = options.buildCommand || 'ng build $app';
  options.buildOptions = options.buildOptions || ['--prod'];
};
