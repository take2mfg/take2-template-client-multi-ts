module.exports = function(env) {
  console.log(`Building webpack for (${env}) environment`);

  const BaseApp = (env == 'prod') ? require('./apps/base/webpack/prod') : require('./apps/base/webpack/dev');

  return [
    BaseApp,
  ];
};
