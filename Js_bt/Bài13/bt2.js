function fromCharCode() {
    // viết code ở đây.
        let res = "";
        for (let i =97; i < 123; ++i )
        {
            res += String.fromCharCode(i);
        }
        return res;
    }
    console.log(fromCharCode());