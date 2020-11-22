function removeDuplicate(array) {
    // write code here...
        let res =[];
        res = array.filter(function(i)
        {if (res.indexOf(i) === -1) 
            return res.push(i);
        })
        return res;
    }