//  3. Lớp Car:
// • Tạo lớp Car với các thuộc tính make, model, và phương thức drive(), sau đó tạo các đối tượng từ lớp này.

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    console.log(`Thương hiệu: ${this.make}, Loại xe: ${this.model}`);
  }
}
const use = new Car("vinfast", "vf3");
use.drive();
