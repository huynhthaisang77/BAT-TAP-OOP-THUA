// Xử lý ngoại lệ:
// • Thêm phương thức kiểm tra ngoại lệ vào lớp BankAccount, ném ngoại lệ khi số tiền rút lớn hơn số dư.

const enoughMoney = 1000;
const balance = 100;

class BankAccount {
  constructor(enoughMoney, balance) {
    this.enoughMoney = enoughMoney;
    this.balance = balance;
  }
  check() {
    try {
      if (this.balance > this.enoughMoney) {
      }
    } catch (error) {}
  }
}
