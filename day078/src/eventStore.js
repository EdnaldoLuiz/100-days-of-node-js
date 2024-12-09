const EventEmitter = require('events');

class EventStore extends EventEmitter {
  constructor() {
    super();
    this.events = [];
  }

  addEvent(event) {
    this.events.push(event);
    this.emit('event', event);
  }

  getEvents() {
    return this.events;
  }
}

module.exports = new EventStore();