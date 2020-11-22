function alphabetical(arr) {
    // Write code here...
        return arr.sort(function(a,b)
        {if (a < b) return -1;
        else if(a > b) return 1;
        else return 0;})
    }