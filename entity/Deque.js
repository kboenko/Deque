class Deque {

    constructor() {
        this.storage = [];
    }

    addHead(item) {
        this.storage.unshift(item);
    }

    removeHead() {
        let first = this.storage.shift();
        return first;
    }

    addTail(item) {
        this.storage.push(item);
    }

    removeTail() {
        let last = this.storage.pop();
        return last;
    }
}

module.exports = Deque;