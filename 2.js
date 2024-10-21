// Lớp kế thừa:• Tạo lớp Student kế thừa từ lớp Person, thêm thuộc tính grade và phương thức study().
import Person from "./1.js";

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log("này là ", this.grade);
  }
}
const use1 = new Student("kho đồ", 20, "hết hàng");
use1.study();
