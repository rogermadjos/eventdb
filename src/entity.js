import {EventEmitter} from 'events';
import _ from 'lodash';

export class Entity extends EventEmitter {

  /**
   * Constructor
   * @param {object} initialState
   * @param {object} reducers
   * @param {object} options
   */
  constructor(initialState, reducers) {
    super();

    _.merge( this, {initialState, reducers, options} );

    this.events = [];
  }

  /**
   * Get current state
   */
  getState() {
    return _.reduce(this.events, (accum, event) => {
      return this.reducers[ event.type ](accum, event);
    }, _.deepClone(this.initialState));
  }

  /**
   * Dispatch an event
   * @param {object} event
   */
  dispatch(event) {
    let reducer = this.reducers[ event.type ];

    if (!reducer) {
      throw new Error('Reduce does not exist for event ' + event.type);
    }

    this.events.push(event);
  }
}
