function Student(diemToan, diemLy, diemHoa) {
    // Viết code ở đây
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }
    Student.prototype.average = function() {
    // Viết code ở đây
        return (this.diemToan + this.diemLy + this.diemHoa)/3
    }