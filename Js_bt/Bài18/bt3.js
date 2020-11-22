var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
    ];
    function filterOutFemales(members) {
    // your code here!
        return members.filter(function(i){if (i.gender !== 'female') return i})
    }
    filterOutFemales(members)