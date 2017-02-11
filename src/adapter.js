export class Adapter {
  /**
   * Retrieve latest snapshot
   * @param {string} entityId
   */
  async getSnapshot(entityId) {
    throw new Error('#getSnapshot is not implemented.');
  }

  /**
   * Set lates snapshot
   * @param {string} entityId
   * @param {Event} event
   * @param {object} state
   */
  async setSnapshot(entityId, event, state) {
    throw new Error('#setSnapshot is not implemented.');
  }

  /**
   * Add new event
   * @param {string} entityId
   * @param {Event} event
   */
  async pushEvent(entityId, event) {
    throw new Error('#pushEvent is not implemented.');
  }

  /**
   * Retrieve events
   * @param {string} entityId
   * @param {Event} event
   */
  async getEvents(entityId, event) {
    throw new Error('#getEvents is not implemented.');
  }
}
