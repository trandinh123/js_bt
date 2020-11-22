function powerup(arr) {
    // your code here!
        return arr.map(function(i){if (i % 2 === 0) return Math.pow(i, 2); return i; })
    }