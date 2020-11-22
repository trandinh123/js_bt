function has(object, key) {
    for(let i in object)
        if (i === key)
            return true;
    return false;
}