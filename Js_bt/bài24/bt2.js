function average(arr) {
    // your code here!
        return Math.round(arr.reduce(function(res, i){return res + (i/arr.length);}, 0))
    }