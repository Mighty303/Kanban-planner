const paths = require('react-scripts/config/paths')
const path = require('path')

// Make the "app" folder be treated as the "src" folder
paths.appSrc = path.resolve(__dirname, 'frontend/src');
// Tell the app that "src/index.js" has moved to "app/index.js"
paths.appIndexJs = path.resolve(__dirname, 'frontend/src/index.js');

const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

    return config;
};