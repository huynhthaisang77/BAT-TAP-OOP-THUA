//11. Quản lý sách trong thư viện:
// • Tạo lớp Library với phương thức để thêm, tìm, và xoá sách khỏi danh sách.
const elements = {};
const elementIds = ["btn"];
elementIds.forEach((item) => {
  const element = document.getElementById(item);
  elements = element;
});
class Library {
  constructor() {
    this.books = [];
  }
  them() {
    const submit = document.getElementById("btn");
    submit.addEventListener("click", () => {
      console.log("kkkkk");
    });
  }
  xoa(id) {
    this.books = this.books.filter();
  }
}
const use = new Library();
use.them();
