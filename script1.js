
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    getArea() {
      return Math.PI * this.radius*2;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  var myCircle = new Circle(5, 'blue');
  console.log(myCircle.getArea()); 
  console.log(myCircle.getCircumference()); 
  
  