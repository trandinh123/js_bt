function countOccurrences(arr) {

    return arr.reduce(function(result, i)
    {
        if (i in result)
            result[i]++;
        else result[i] = 1;
        return result;
    }, {})
}