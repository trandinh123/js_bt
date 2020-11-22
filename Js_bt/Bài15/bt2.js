function first(arr, n) {
    // your code here!
        let res = [];
        for(let  i=0; i < n; ++i)
            res.push(arr.shift());
        return res;
    }