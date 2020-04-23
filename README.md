# js-event

a simple func tool

```js
import { Event } from 'simple-event'

const event = new Event()

event.emit('test', 'test')

event.on('test', (params) => {
  console.log(params)
})
```