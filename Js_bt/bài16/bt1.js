function double(num) {
    // viết code ở đây.
        return 2 * num
    }
    function sumAndDo(nums, callback) {
    // viết code ở đây.
        let sum = 0;
        for(let i of nums)
            sum += i;
        return callback(sum);
    }