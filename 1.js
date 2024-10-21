// Tạo lớp Person:• Tạo lớp Person với các thuộc tính name, age, và phương thức greet() để in ra “Hello, my name is…”.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, my name is", this.name);
  }
}

const use = new Person("sang");
use.greet();
export default Person;
