var arr = [
    {
    name: "Quiet Samurai",
    age: 22
    },
    {
    name: "Arrogant Ambassador",
    age: 100
    },
    {
    name: "Misunderstood Observer",
    age: 2
    },
    {
    name: "Unlucky Swami",
    age: 77
    }
    ]
    function byAge(arr){
    // Write code here...
        return arr.sort(function(a,b){return a.age - b.age});
    }
    byAge(arr);