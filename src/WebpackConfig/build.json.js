const path = require('path');
const fs = require('fs');
// const lodash = require('lodash');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637

const validKey = new Set(['entry', 'devServer', 'devServer', 'externals']);
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = (function () {
  // const validBuildJson = lodash.pick(buildJson, ['entry', 'alias', 'devServer', 'externals']);
  try {
    return process.env.NODE_ENV === 'development'
      ? resolveApp('build.dev.json')
      : resolveApp('build.json');
  } catch (e) {
    return {};
  }
})();
