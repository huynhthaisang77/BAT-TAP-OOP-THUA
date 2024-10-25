//10. Quản lý sinh viên:
// • Tạo lớp University để quản lý danh sách sinh viên, thêm phương thức để thêm, xoá và tìm sinh viên.

class University {
  constructor() {
    this.students = [];
  }
  them(name, id) {
    const student = {
      id: id,
      name: name,
    };
    this.students.push(student);

    console.log(`học sinh đã thêm : `, student);
  }
  xoa(id) {
    this.students = this.students.filter((student) => student.id !== id);
    console.log("xoá sinh viên theo id", id);
  }
  timsinhvien(id) {
    const student = this.students.find((student) => id === student.id);

    if (student) {
      console.log("Tìm thấy sinh viên:", id);
    } else {
      console.log("Không tìm thấy sinh viên với ID:", id);
    }
  }
}
const use = new University();
use.them("sang", 1);
use.them("Longkute", 2);
use.timsinhvien(1);
use.timsinhvien(2);
