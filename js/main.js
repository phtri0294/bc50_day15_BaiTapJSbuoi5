// ------------------------------------------
// CHƯƠNG TRÌNH 
btnXepHang.onclick = function () {
    // INPUT
    var diemToan = document.getElementById('diemToan').value * 1;
    var diemLy = document.getElementById('diemLy').value * 1;
    var diemHoa = document.getElementById('diemHoa').value * 1;

    // OUTPUT
    var diemTrungBinh = '';
    var xepHang = '';

    // PROGRESS
    diemTrungBinh = (diemToan + diemLy + diemHoa) / 3;

    // HIỂN THỊ
    if (diemTrungBinh >= 8.5) {
        document.getElementById('xepHang').innerHTML = 'Loại giỏi: ' + diemTrungBinh;
    }
    else if (6.5 <= diemTrungBinh && diemTrungBinh < 8.5) {
        document.getElementById('xepHang').innerHTML = 'Loại khá: ' + diemTrungBinh;
    }
    else if (5 <= diemTrungBinh && diemTrungBinh < 6.5) {
        document.getElementById('xepHang').innerHTML = 'Loại trung bình: ' + diemTrungBinh;
    }
    else {
        document.getElementById('xepHang').innerHTML = 'Loại yếu: ' + diemTrungBinh;
    }
};

// ------------------------------------------
// CHƯƠNG TRÌNH 
var num = 3;
switch (num) {
    case 1:
        console.log('day la so 1');
        break;

    case 2:
        console.log('day la so 2');
        break;


    default:
        console.log('khong la so nao');
        break;
}

// ------------------------------------------
// CHƯƠNG TRÌNH 
var textT = 'ba';
switch (textT) {
    case 'ba':
        console.log('day la ba');
        break;

    case 'me':
        console.log('day la me');
        break;


    default:
        console.log('khong');
        break;
}

// ------------------------------------------
// DAY15
function btnxuatThongTin() {
    var num_1 = 5;
    var num_2 = 10;

    var total = num_1 + num_2;
    console.log('btnxuatThongTin: ', total);
};

btnxuatThongTin();


// ------------------------------------------
function tinhTong(a, b) {
    var num_1 = a;
    var num_2 = b;

    var total = num_1 + num_2;
    console.log('tinh tong: ', total);
};

tinhTong(100, 5);
tinhTong(50, 5);

// ------------------------------------------
function tinhLuong(luongNgay, soNgayLam) {
    var luong = luongNgay * soNgayLam;

    return luong;
    console.log('luong: ',luong);
};

var tongLuongCuLi = tinhLuong(10000,5);
console.log('tongLuongCuLi', tongLuongCuLi);

var tongLuongGiamDoc = tinhLuong(50000,5);
console.log('tongLuongGiamDoc', tongLuongGiamDoc);