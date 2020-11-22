function positiveNumber(arr) {
    // your code here
        return arr.map(function(i){if (i < 0) return -i; return i })
    }