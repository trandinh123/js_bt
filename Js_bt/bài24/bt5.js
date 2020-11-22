function rightTriangle(a, b, c) {
    // your code here
        if (a > 0 && b > 0 && c > 0)
            return ( Math.pow(Math.min(a,b),2) + Math.pow(Math.min(b,c),2) === Math.pow(Math.max(a,b,c),2) )
        return false;    
    }