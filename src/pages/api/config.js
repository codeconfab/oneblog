// @flow

import Config from '../../config';

const ConfigHandler = (req: any, res: any) => {
  res.setHeader('access-control-allow-origin', '*');
  res.json({
    version: '1.0.0',
    oneGraphAppId: Config.appId,
    repoName: Config.repoName,
    repoOwner: Config.repoOwner,
    codeTheme: Config.codeTheme,
    title: Config.title,
    description: Config.description,
  });
};

export default ConfigHandler;
