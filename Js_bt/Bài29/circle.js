function Circle(x, y, radius)
{ 
    this.x = x; 
    this.y = y; 
    this.radius = radius;
};
Circle.prototype.isOverlapped = function(circle2)
{
        let distance = Math.sqrt((this.x*this.x - circle2.x*circle2.x)+(this.y*this.y - circle2.y*circle2.y))
        if (distance > (this.radius + circle2.radius))
            return 1;
        else if (distance < (this.radius + circle2.radius))
            return -1;
        else return 0;
};
module.exports = Circle;