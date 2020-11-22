function has(array, value) {
    // viết code ở đây
        for (let i of array)
        {
            if (i === value)
                return true;
        }
        return false;
    }