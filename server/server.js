import fs from 'fs-extra';
import path from 'path';
import express from 'express';
import enforce from 'express-sslify';
import compression from 'compression';
import Webpack from 'webpack';
import { forEach } from 'lodash';

const port = process.env.PORT || 3345;
const isDevelopment = !!(process.env.NODE_ENV !== 'production');
const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;

// Build app objects from 'apps/' directory
let apps = (function() {
  const folders = fs.readdirSync(path.resolve(__dirname, '../apps'));

  let apps = {};
  forEach(folders, appName => {
    apps[appName] = require(`../apps/${appName}/route`);
  });

  return apps;
})();

// Do the webpack builds
const buildApps = () =>
  new Promise((resolve, reject) => {
    const env = isDevelopment ? 'dev' : 'prod';
    const webpackConfig = require('../webpack.config')(env);
    const compiler = Webpack(webpackConfig);

    const handler = (err, stats) => {
      const appStats = stats.toJson({
        assets: false,
        hash: true,
      });

      forEach(appStats.children, app => {
        const { name, hash } = app;
        console.log(`Reloading asset file for (${name}@${hash})`);
        apps[name].assets = JSON.parse(
          fs.readFileSync(
            path.resolve(__dirname, `../dist/${name}/manifest.json`),
          ),
        );
      });

      resolve(appStats);
    };

    if (isDevelopment) {
      compiler.watch(
        {
          aggregateTimeout: 300,
          poll: 1000,
        },
        handler,
      );
    } else {
      compiler.run(handler);
    }
  });

const server = express();

const startServer = async () => {
  await buildApps();

  if (process.env.FORCE_SSL) {
    server.use(enforce.HTTPS({ trustProtoHeader: true }));
  }

  if (!process.env.DISABLE_COMPRESSION) {
    server.use(compression());
  }

  const router = express.Router({
    caseSensitive: false,
    strict: true,
  });

  server.use(router);

  forEach(apps, (app, appName) => {
    console.log(`Attaching ${appName} app`);

    // Static assets from webpack build
    app.assets = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, `../dist/${appName}/manifest.json`),
      ),
    );
    router.use(
      `/${appName}/assets`,
      express.static(path.join(__dirname, `../dist/${appName}`), {
        index: false,
        redirect: false,
        maxAge: ONE_MONTH,
      }),
    );

    // Use the app route
    app.route(router, app);
  });

  //Keepalive / Healthcheck
  server.get('/', (req, res) => {
    res.send('OK');
  });

  server.listen(port, () => {
    console.log(`Server Listening on PORT ${port}`);
  });
};

startServer();
