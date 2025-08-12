class LRUCache {
  constructor(capacity) {
    // your code goes here
    this.capacity = Number(capacity) // for the validation use the Number
    this.head = null;
    this.tail = null;
    this.map = new Map(); // creating a hash map to store the key and value <key> : <NodeAddress>
  }
  get(key) {
    // your code goes here
  }
  put(key, value) {
    // your code goes here
    // If the key already is there 
    // Remove the existing key
    // create a new node
    // add the node to the head
    if(this.map.has(key)){
        // 1. remove the old node
        // 2. create a new node
        // 3. add the new node to the head
    }
  }
}