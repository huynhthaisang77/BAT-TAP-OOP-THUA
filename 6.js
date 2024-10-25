// Xử lý ngoại lệ:
// • Thêm phương thức kiểm tra ngoại lệ vào lớp BankAccount, ném ngoại lệ khi số tiền rút lớn hơn số dư.

class Taikhoannganhang {
  constructor(sotaikhoan, tennganhang, sodu) {
    this.sotaikhoan = sotaikhoan;
    this.tennganhang = tennganhang;
    this.sodu = sodu;
  }
  naptien(sotien) {
    if (sotien > 0) {
      this.sodu += sotien;
      console.log(
        `Đã nạp ${sotien} vào tài khoản. Số dư hiện tại là ${this.sodu}.`
      );
    } else {
      console.log("Số tiền nạp phải lớn hơn 0.");
    }
  }

  ruttien(sotien) {
    if (sotien <= 0) {
      console.log("Số tiền rút phải lớn hơn 0.");
    } else if (sotien > this.sodu) {
      console.log(
        `Không thể rút ${sotien}. Số dư hiện tại chỉ có ${this.sodu}.`
      );
    } else {
      this.sodu -= sotien;
      console.log(`Đã rút ${sotien}. Số dư còn lại là ${this.sodu}.`);
    }
  }
  kiemtrasotien() {
    console.log(`số tiền hiện tại của tài khoản là ${this.sodu}`);
  }
}

const sangnaptien = new Taikhoannganhang("123456", "ViettelPay", 0);
sangnaptien.naptien(1000000);
sangnaptien.ruttien(50000);
sangnaptien.ruttien(200000);
sangnaptien.kiemtrasotien();
