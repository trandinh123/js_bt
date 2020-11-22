function double(num) {
    // viết code ở đây.
        return 2 * num
    }
    function transform(numbers, callback) {
    // Viết nội dung hàm ở đây
        let res = [];
        for (let i of numbers)
            res.push(callback(i));
        return res;
    }