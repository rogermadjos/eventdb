import {EventEmitter} from 'events';
import _ from 'lodash';
import debug from 'debug';

const loggers = {
  entity: debug('eventdb:entity')
};

export class Entity extends EventEmitter {

  /**
   * Constructor
   * @param {object} initialState
   * @param {object} reducers
   * @param {object} options
   * @param {object} options.adapter
   */
  constructor(initialState, reducers, options) {
    super();

    this._reducers = reducers;
    this._events = [];
    this._initialState = initialState;

    _.merge(this, initialState || {});
  }

  digest() {
  }

  /**
   * Get current state
   */
  getState() {
    return _.reduce(this._events, (accum, event) => {
      return this._reducers[ event.type ](accum, event);
    }, _.deepClone(this._initialState));
  }

  /**
   * Dispatch an event
   * @param {object} event
   */
  dispatch(event) {
    loggers.entity('dispatch', event);

    let reducer = this._reducers[ event.type ];

    if (!reducer) {
      throw new Error('Reducer does not exist for event ' + event.type);
    }

    this.events.push(event);
    this.emit('dispatch', event);
  }
}
