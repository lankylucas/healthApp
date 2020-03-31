class HashMap {
  /**
   * Initialize array that holds the values. Default is size 1,000
   * @param {number} initialCapacity
   */
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
  }

  /**
   * Insert a key/value pair into the hash map
   * It doesn't handle collisions
   * @param {any} key
   * @param {any} value
   */
  set(key, value) {
    const index = this.getIndex(key);
    this.buckets[index] = value;
  }

  /**
   * Gets the value out of the hash map
   * @param {any} key
   */
  get(key) {
    const index = this.getIndex(key);
    return this.buckets[index];
  }

  /**
   * Very bad hash function that causes tons of collisions
   * @param {any} key
   */
  hash(key) {
    return key.toString().length;
  }

  /**
   * Get the array index after applying the hash funtion to the given key
   * @param {any} key
   */
  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}

module.exports = HashMap;
