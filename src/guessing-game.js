let l = 0;
let r = 0;
let n = 0;

class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        l = min;
        r = max;
    }

    guess() {
        n = Math.round((l + r) / 2);
        return n;
    }

    lower() {
        r = n;
    }

    greater() {
        l = n;
    }
}

module.exports = GuessingGame;
