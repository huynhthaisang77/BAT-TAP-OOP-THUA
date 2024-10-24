// /9. Lớp Employee và tính lương:
//    • Tạo lớp Employee với thuộc tính salary, thêm phương thức calculateAnnualSalary().

class Employee {
  constructor(salary) {
    this.salary = salary;
  }
  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

const use = new Employee(50000000);
console.log(use.calculateAnnualSalary());
