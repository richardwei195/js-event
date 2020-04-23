# js-event
[![NPM version][npm-image]][npm-url]
![Build Status][travis-image]
[![Downloads][downloads-image]][downloads-url]

[npm-url]: https://www.npmjs.com/package/@ricardweii/js-event
[npm-image]: https://img.shields.io/npm/v/@ricardweii/js-event.svg
[travis-image]: https://travis-ci.org/richardwei195/js-event.svg?branch=master
[downloads-url]: https://npmjs.org/package/@ricardweii/js-event
[downloads-image]: https://img.shields.io/npm/dm/@ricardweii/js-event.svg?style=flat-square

a simple func tool

```js
import { Event } from 'simple-event'

const event = new Event()

event.emit('test', 'test')

event.on('test', (params) => {
  console.log(params)
})
```