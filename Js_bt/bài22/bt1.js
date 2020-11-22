function flatten(arr) {
    let total ;
    total = arr.reduce(function(total, arrI)
    {
        arrI.map(function(i)
        {
            return total.push(i);    
        });
        return total;
    })
    return total;
}