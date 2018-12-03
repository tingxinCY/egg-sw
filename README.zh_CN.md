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

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-sw 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.sw = {
  enable: true,
  package: 'egg-sw',
};
```

## 使用场景

- Why and What: 
service-worker.js通常注册在跟目录(https://127.0.0.1:443/service-worker.js)，与普通静态资源的prefix可能不同，所以通过此插件单独配置service-worker.js的路由服务。

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。
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

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
