//12. Lớp Product với chiết khấu:
// • Tạo lớp Product với phương thức getDiscountedPrice() tính giá sau khi áp dụng chiết khấu.
// tạo 1 mảng rỗng
//
class Product {
  constructor() {
    this.trans = [];
  }
  //   constructor(price, discount) {
  //     this.price = price;
  //     this.discount = discount;
  //   }
  //   getDiscountedPrice() {

  //   }
  money(id, name) {
    const a = {
      id: id,
      name: name,
    };
    this.trans.push(a);
    console.log(this.trans);

    return this.trans;
  }
}
const use = new Product();
use.money(1, "bbbbbbb");
console.log(use.money(1, "sang"));
console.log(use.money(2, "Longkute"));
