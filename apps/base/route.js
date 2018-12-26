import fs from 'fs-extra';
import path from 'path';
import { template } from 'lodash';

export const appName = '___base___';

module.exports = {
  name: appName,
  assets: null,
  template: template(fs.readFileSync(path.resolve(__dirname, './index.template.html'))),
  route: function(router, app) {
    router.get(`/${appName}/*`, (req, res, next) => {
      const data = {
        assets: app.assets,
      };
      res.status(200).send(app.template(data));
    });
  },
};
