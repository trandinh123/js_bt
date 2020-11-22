function trigonim(number) {
    // your code here
        let res = [];
        res.push(Math.sin(number).toFixed(3))
        res.push(Math.cos(number).toFixed(3))
        res.push(Math.tan(number).toFixed(3))
        return res;
    }