'use strict';

const range = require('koa-range');
const assert = require('assert');
const mkdirp = require('mkdirp');
const compose = require('koa-compose');
const staticCache = require('koa-static-cache');
const LRU = require('ylru');

module.exports = (options, app) => {
  options.files = new LRU(options.maxFiles);
  function rangeMiddleware(ctx, next) {
    if (ctx.path !== options.path) {
      return next();
    }
    return range(ctx, next);
  }

  assert.strictEqual(typeof options.dir, 'string', 'Must set `app.config.sw.dir` when sw plugin enable');

  mkdirp.sync(options.dir);

  app.loggers.coreLogger.info('[egg-sw] starting service-worker.js serve %s -> %s', options.prefix, options.dir);

  return compose([ rangeMiddleware, staticCache(options) ]);
};
