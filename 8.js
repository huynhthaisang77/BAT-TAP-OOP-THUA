//8.  Phương thức tính toán:
// • Tạo lớp Circle với bán kính, và phương thức getArea() để tính diện tích của hình tròn.

class Circle {
  constructor(bankinh) {
    this.bankinh = bankinh;
  }
  getArea() {
    return 3.14 * this.bankinh * this.bankinh;
  }
}
const use = new Circle(20);
console.log(use.getArea());
