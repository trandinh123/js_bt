function calculate(start, end) {
    // viết code ở đây.
        let res = 1;
        for (let i=start; i < end; ++i)
            res *= i;
        return res;
    }