function findDivisibleNum(array, x) {
    // viết code ở đây.
        return array.find(function(i){if (i % x === 0) return i;})
    }