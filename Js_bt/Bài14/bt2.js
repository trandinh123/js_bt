var apartment = {
    bedroom :{
    area: 20,bed: {
    type: 'twin-bed',
    price: 100
    }
    }
    };
console.log(Object.keys(apartment).length)
 function getObjectKey(obj)
{
    for (let i of Object.keys(obj))
    {
        console.log(obj[i])
        if (Object.keys(obj[i]).length > 1)
            getObjectKey(obj[i]);
    }
}
console.log(getObjectKey(apartment))
