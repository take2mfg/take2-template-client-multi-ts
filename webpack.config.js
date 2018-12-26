module.exports = function(env) {
  console.log(`Building webpack for (${env}) environment`);

  const BaseApp = (env == 'prod') ? require('./apps/___base___/webpack/prod') : require('./apps/___base___/webpack/dev');

  return [
    BaseApp,
  ];
};
