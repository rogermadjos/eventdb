import _ from 'lodash';
import uuid from 'uuid';

export class Event {
  constructor(type, params = {}, _id) {
    this.type = type;
    _.merge(this, params);
    this._id = _id || uuid.v4();
  }
}
