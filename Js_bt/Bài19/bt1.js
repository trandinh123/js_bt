function findFirstEvenNumber(array) {
    // your code here
        return array.find(function(i){if (i % 2 === 0) return i;})
    }