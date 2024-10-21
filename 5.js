// 5.  Phương thức tĩnh (Static method):
// • Tạo lớp MathUtils với các phương thức tĩnh như sum(), subtract(), multiply(), divide().

class MathUtils {
  constructor(cong, tru, nhan, chia) {
    this.cong = cong;
    this.tru = tru;
    this.nhan = nhan;
    this.chia = chia;
  }
  static sum(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
  static divide(a, b) {
    return a / b;
  }
}
console.log(MathUtils.sum(5, 5));
console.log(MathUtils.sum(5, 5));
console.log(MathUtils.sum(5, 5));
console.log(MathUtils.sum(5, 5));
