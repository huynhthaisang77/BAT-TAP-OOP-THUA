//7.  Tạo đối tượng từ một mảng:
//• Tạo lớp Team, khởi tạo một mảng các đối tượng Player với thông tin như tên và vị trí.

// Lớp Player để lưu thông tin từng cầu thủ
class Player {
  constructor(ten, vitri) {
    this.ten = ten;
    this.vitri = vitri;
  }
}

class Team {
  constructor(quanlycauthu) {
    // Sử dụng map() để tạo ra mảng các đối tượng Player
    this.nguoichoi = quanlycauthu.map((x) => new Player(x.ten, x.vitri));
  }
}

const danhsachcauthu = [
  {
    ten: "ronaldo",
    vitri: "Tiền đạo",
  },
  {
    ten: "messi",
    vitri: "Tiền đạo",
  },
  {
    ten: "modric",
    vitri: "Tiền vệ",
  },
];
const team = new Team(danhsachcauthu);
console.log(team.nguoichoi);
