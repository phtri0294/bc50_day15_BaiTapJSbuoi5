function getEle(id) {
    return document.getElementById(id);
};

function formatMoney(number) {
    return new Intl.NumberFormat('vn-VN').format(number);
}

// <!-- ===================================================-->
// <!-- BÀI TẬP 1: QUẢN LÝ TUYỂN SINH -->
getEle('btnKetQuaDiem').onclick = function () {
    // INPUT
    var diemChuan = getEle('diemChuan').value * 1;
    var diemMonThu1 = getEle('diemMonThu1').value * 1;
    var diemMonThu2 = getEle('diemMonThu2').value * 1;
    var diemMonThu3 = getEle('diemMonThu3').value * 1;
    var chonKhuVuc = getEle('chonKhuVuc').value * 1;
    var chonDoiTuong = getEle('chonDoiTuong').value * 1;

    // OUTPUT
    var ketQuaDiem = '';

    var ketQua = '';

    // PROGRESS
    ketQuaDiem = (diemMonThu1 + diemMonThu2 + diemMonThu3) + (chonKhuVuc + chonDoiTuong);

    // KẾT QUẢ HIỂN THỊ
    if (diemMonThu1 === 0 || diemMonThu2 === 0 || diemMonThu3 === 0) {
        ketQua = 'Bạn thi rớt do có 1 môn bị điểm liệt (0 điểm)';
    }
    else if (ketQuaDiem < diemChuan) {
        ketQua = 'Bạn thi rớt do điểm bé hơn điểm chuẩn: ' + ketQuaDiem + ' điểm';
    }
    else {
        ketQua = 'Chúc mừng bạn thi đậu: ' + ketQuaDiem + ' điểm';
    }

    getEle('ketQuaDiem').innerHTML = ketQua;
};

// <!-- ===================================================-->
// <!-- BÀI TẬP 2: TÍNH TIỀN ĐIỆN -->
getEle('btnTinhTienDien').onclick = function () {
    // INPUT
    var nhapHoTen = getEle('nhapHoTen').value;
    var nhapSoKw = parseFloat(getEle('nhapSoKw').value);

    const cost_0to50 = 500;
    const cost_50to100 = 650;
    const cost_100to200 = 850;
    const cost_200to350 = 1100;
    const cost_350toMore = 1300;

    // OUTPUT
    var tinhTienDien = '';
    var ketQua = '';

    // PROGRESS
    tinhTienDien = nhapSoKw * cost_0to50;
    ketQua = 'Họ Tên: ' + nhapHoTen + '<br>';

    // HIỂN THỊ KẾT QUẢ
    if (nhapSoKw <= 50) {
        tinhTienDien = nhapSoKw * cost_0to50;
    }
    else if (nhapSoKw > 50 && nhapSoKw <= 100) {
        tinhTienDien = (50 * cost_0to50) + (nhapSoKw - 50) * cost_50to100;
    }
    else if (nhapSoKw > 100 && nhapSoKw <= 200) {
        tinhTienDien = (50 * cost_0to50) + 50 * cost_50to100 + (nhapSoKw - 100) * cost_100to200;
    }
    else if (nhapSoKw > 200 && nhapSoKw <= 350) {
        tinhTienDien = (50 * cost_0to50) + 50 * cost_50to100 + 100 * cost_100to200 + (nhapSoKw - 200) * cost_200to350;
    }
    else if (nhapSoKw > 350) {
        tinhTienDien = (50 * cost_0to50) + 50 * cost_50to100 + 100 * cost_100to200 + 150 * cost_200to350 + (nhapSoKw - 350) * cost_350toMore;
    }

    ketQua += 'Tiền điện: ' + formatMoney(tinhTienDien) + ' VND';
    getEle('tinhTienDien').innerHTML = ketQua;
};

// <!-- ===================================================-->
// <!-- BÀI TẬP 3: TÍNH THUẾ THU NHẬP CÁ NHÂN -->
getEle('btnTinhTienThue').onclick = function () {
    //INPUT
    var nhapHoVaTen = getEle("nhapHoVaTen").value;
    var tongThuNhap = getEle("tongThuNhap").value;
    var soNguoiPhuThuoc = getEle("soNguoiPhuThuoc").value;

    // OUTPUT
    var thuNhapChiuThue = '';
    var thueSuat = '';
    var tienThue = '';

    var ketQua = '';

    //PROGRESS
    var thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoiPhuThuoc * 1.6e+6;

    if (thuNhapChiuThue <= 60e+6) {
        thueSuat = 5;
    }
    else if (60e+6 < thuNhapChiuThue && thuNhapChiuThue <= 120e+6) {
        thueSuat = 10;
    }
    else if (120e+6 < thuNhapChiuThue && thuNhapChiuThue <= 210e+6) {
        thueSuat = 15;
    }
    else if (210e+6 < thuNhapChiuThue && thuNhapChiuThue <= 384e+6) {
        thueSuat = 20;
    }
    else if (384e+6 < thuNhapChiuThue && thuNhapChiuThue <= 624e+6) {
        thueSuat = 25;
    }
    else if (624e+6 < thuNhapChiuThue && thuNhapChiuThue <= 96e+6) {
        thueSuat = 30;
    }
    else if (thuNhapChiuThue > 96e+6) {
        thueSuat = 35;
    }

    // Tính số tiền thuế
    var tienThue = thuNhapChiuThue * (thueSuat / 100);

    // Format VND
    var currentformat = new Intl.NumberFormat('vn-VN');

    // HIỂN THỊ KẾT QUẢ
    ketQua = "Họ tên: " + nhapHoVaTen + "<br>";
    ketQua += "Tiền thuế thu nhập cá nhân: " + currentformat.format(tienThue) + ' VND';

    getEle("tinhTienThue").innerHTML = ketQua;
}

// <!-- ===================================================-->
// <!-- BÀI TẬP 4: TÍNH TIỀN CÁP -->
function updateSoKetNoi() {
    var LoaiKhachHangInput = getEle('chonLoaiKhachHang');
    var soKetNoiInput = getEle('soKetNoi');

    if (LoaiKhachHangInput.value === 'doanhNghiep') {
        soKetNoiInput.style.display = 'block';
    } else {
        soKetNoiInput.style.display = 'none';
        soKetNoiInput.value = '';
    }
};

getEle('btnTinhTienCap').onclick = function () {
    // INPUT
    var chonLoaiKhachHang = getEle('chonLoaiKhachHang').value;
    var nhapMaKhachHang = getEle('nhapMaKhachHang').value;
    var soKenhCaoCap = getEle('soKenhCaoCap').value;
    var soKetNoi = getEle('soKetNoi').value;

    // OUTPUT
    var phiXuLyHoaDon = '';
    var phiDichVuCoBan = '';
    var phiThueKenhCaoCap = '';
    var tongTien = '';

    var ketQua = '';

    // PROGRESS
    if (chonLoaiKhachHang === 'nhaDan') {
        phiXuLyHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        phiThueKenhCaoCap = 7.5 * soKenhCaoCap;
    }
    else if (chonLoaiKhachHang === 'doanhNghiep' && soKetNoi <= 10) {
        phiXuLyHoaDon = 15;
        phiDichVuCoBan = 75;
        phiThueKenhCaoCap = 50 * soKenhCaoCap;
    }
    else if (chonLoaiKhachHang === 'doanhNghiep') {
        phiXuLyHoaDon = 15;
        phiDichVuCoBan = 75 + 5 * (soKetNoi - 10);
        phiThueKenhCaoCap = 50 * soKenhCaoCap;
    }

    // Tính tổng tiền
    tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;

    // HIỂN THỊ KẾT QUẢ
    ketQua = 'Mã khách hàng: ' + nhapMaKhachHang;
    ketQua += 'Tiền cáp:$ ' + tongTien;

    getEle('tinhTienCap').innerHTML = ketQua;
};

