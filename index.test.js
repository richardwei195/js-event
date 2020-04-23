const Event = require('./index').Event;

test('could emit and receive events', () => {
  const event = new Event()

  event.on('test', (test) => {
    expect(test).toBe('success');
  })

  event.emit('test', 'success')
});