const Deque = require('../entity/Deque');

module.exports = (string) => {

    let onlyLowLetters = string.replace(/[^A-Za-zА-Яа-яЁё]/g, "").toLowerCase();

    let deque = new Deque();

    for (let i = 0; i < onlyLowLetters.length; i ++) {
        deque.addHead(onlyLowLetters.charAt(i));
        deque.addTail(onlyLowLetters.charAt(i));
    }

    return deque.storage.join('') === onlyLowLetters + onlyLowLetters;

};