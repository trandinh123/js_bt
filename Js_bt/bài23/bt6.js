var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
    ];function getTopStudents(students) {
    // Write code here...
        let res = students.sort(function(a,b){return b.score - a.score}).splice(0,3);
        return res.map(function(i){return i.name});
    }
    getTopStudents(students);