'use strict';

const path = require('path');

module.exports = appInfo => {
  /**
   * egg-sw default config
   * @member Config#sw
   * @property {String} SOME_KEY - some description
   */

  exports.sw = {
    path: '/service-worker.js',
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    preload: false,
    buffer: false,
    dynamic: true,
    maxFiles: 1,
  };
  return exports;
};

