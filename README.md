# egg-sw

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-sw.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-sw
[travis-image]: https://img.shields.io/travis/eggjs/egg-sw.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-sw
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-sw.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-sw?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-sw.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-sw
[snyk-image]: https://snyk.io/test/npm/egg-sw/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-sw
[download-image]: https://img.shields.io/npm/dm/egg-sw.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-sw

Static server plugin for egg, base on [koa-static-cache](https://github.com/koajs/static-cache)

## Install

```bash
$ npm i egg-sw --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.sw = {
  enable: true,
  package: 'egg-sw',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.sw = {
  prefix: '/',
  path: '/service-worker.js',
  dir: path.join(appInfo.baseDir, 'app/public'),
  preload: false,
  buffer: false,
  maxFiles: 1,
  dynamic: true,
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
