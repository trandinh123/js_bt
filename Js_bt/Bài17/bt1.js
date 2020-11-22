function tripple(num) {
    // Write code here...
        return  num * 3;
    }
    function multiply(numbers) {
    // Write code here...
        let res = [];
        res = numbers.map(function(i){return tripple(i)})
        return res;
    }