function sumMultiplyArray(a, b) {
    // viết code ở đây.
        let res = 0;
        for (let i of a)
            for (let j of b)
                res += i*j;
        return res;
    }