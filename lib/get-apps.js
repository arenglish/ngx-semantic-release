module.exports = function getApps(options, context) {
  const angularJSON = require(context.cwd + "/angular.json");
  if (!angularJSON || !angularJSON.projects) {
    return [];
  }

  return Object.keys(angularJSON.projects).reduce((apps, projectKey) => {
    const project = {
      name: projectKey,
      config: angularJSON.projects[projectKey]
    };
    const isAllowed = (options.apps.length === 0 || options.apps.includes(project.name)) && project.config.projectType === 'application';

    return isAllowed ? [...apps, project ] : apps;
  }, [])
};
