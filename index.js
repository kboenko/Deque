const Deque = require('./entity/Deque');
const isPalindrome = require('./utils/isPalindrome');

(() => {

    let deque = new Deque();

    for(let i = 0; i < 9; i++) {
        deque.addTail(i+23);
    }

    console.log(deque);

    let m = deque.removeTail();

    console.log(m);

    let n = deque.removeHead();

    console.log(n);

    let phrase1 = 'A dog! A panic in a pagoda.';
    let phrase2 = 'Белый конь едет вниз по кочерге, того и гляди упадёт';

    if (isPalindrome(phrase1)) {
        console.log(`${phrase1} is palindrome!`)
    } else {
        console.log(`${phrase1} is not palindrome!`);
    }

    if (isPalindrome(phrase2)) {
        console.log(`${phrase2} is palindrome!`);
    } else {
        console.log(`${phrase2} is not palindrome!`);
    }


})();