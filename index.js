//bài tập 1
function kiemTraKetQua() {
  let diemChuan = parseFloat(document.getElementById("diemChuan").value);
  let diemMon1 = parseFloat(document.getElementById("diemMon1").value);
  let diemMon2 = parseFloat(document.getElementById("diemMon2").value);
  let diemMon3 = parseFloat(document.getElementById("diemMon3").value);
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value;

  let diemUuTienKhuVuc = 0;
  let diemUuTienDoiTuong = 0;

  if (khuVuc === "X") {
    diemUuTienKhuVuc = 1.5;
  }

  if (doiTuong === "0") {
    diemUuTienDoiTuong = 1;
  }

  let diemUuTien = diemUuTienKhuVuc + diemUuTienDoiTuong;
  let tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

  if (
    tongDiem >= diemChuan &&
    diemMon1 !== 0 &&
    diemMon2 !== 0 &&
    diemMon3 !== 0
  ) {
    let message = "Thí sinh đã đậu! Tổng điểm đạt được: " + tongDiem;
    alert(message);
  } else {
    let message = "Thí sinh đã rớt!";
    alert(message);
  }
}

//bài tập 2

function tinhTien() {
  let soDien = parseFloat(document.getElementById("soDien").value);
  let tienDien = 0;

  if (soDien <= 50) {
    tienDien = soDien * 500;
  } else if (soDien <= 100) {
    tienDien = 50 * 500 + (soDien - 50) * 650;
  } else if (soDien <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (soDien <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  }

  let message = "Tiền điện: " + tienDien + "đ";
  alert(message);
}

//bai tap 3
function calculateCome() {
  const tagHoTen = document.getElementById("hoTen").value;
  const tagIncome = parseFloat(document.getElementById("thuNhap").value);
  const tagGiaDinh = parseInt(document.getElementById("giaDinh").value);

  const thueThuNhap = tagIncome - 4 - tagGiaDinh * 1.6;

  let taxRate = 0;
  if (thueThuNhap <= 60) {
    taxRate = 5;
  } else if (thueThuNhap <= 120) {
    taxRate = 10;
  } else if (thueThuNhap <= 210) {
    taxRate = 15;
  } else if (thueThuNhap <= 384) {
    taxRate = 20;
  } else if (thueThuNhap <= 624) {
    taxRate = 25;
  } else if (thueThuNhap <= 960) {
    taxRate = 30;
  } else {
    taxRate = 35;
  }

  const taxAmount = thueThuNhap * (taxRate / 100);

  document.getElementById(
    "tax-result"
  ).innerText = `Họ tên: ${tagHoTen}\nThuế thu nhập cá nhân: ${taxAmount} triệu VNĐ`;
}

//bai tap 4
//BT4
function handleChangeCustomerType() {
  const customerTypeSelect = document.getElementById("customer-type");
  const connectionsInput = document.getElementById("connections");

  if (customerTypeSelect.value === "doanhnghiep") {
    connectionsInput.removeAttribute("disabled");
    connectionsInput.setAttribute("required", "");
  } else {
    connectionsInput.setAttribute("disabled", "");
    connectionsInput.removeAttribute("required");
  }
}

function handleChangeCustomerType() {
  const customerTypeSelect = document.getElementById("customer-type");
  const connectionsInput = document.getElementById("connections");

  if (customerTypeSelect.value === "doanhnghiep") {
    connectionsInput.removeAttribute("disabled");
    connectionsInput.setAttribute("required", "");
  } else {
    connectionsInput.setAttribute("disabled", "");
    connectionsInput.removeAttribute("required");
  }
}

function calculateBill(event) {
  event.preventDefault();
  const customerTypeSelect = document.getElementById("customer-type");
  const customerCodeInput = document.getElementById("customer-code");
  const connectionsInput = document.getElementById("connections");
  const premiumChannelsInput = document.getElementById("premium-channels");
  const resultDiv = document.getElementById("result");

  const customerType = customerTypeSelect.value;
  const customerCode = customerCodeInput.value;
  const connections =
    customerType === "doanhnghiep" ? parseInt(connectionsInput.value) || 0 : 0;
  const premiumChannels = parseInt(premiumChannelsInput.value) || 0;

  let processingFee, basicServiceFee, premiumChannelsFee;

  if (customerType === "doanhnghiep") {
    processingFee = 15;
    basicServiceFee = 75;

    if (connections > 10) {
      basicServiceFee += (connections - 10) * 5;
    }

    premiumChannelsFee = premiumChannels * 50;
  } else {
    processingFee = 4.5;
    basicServiceFee = 20.5;
    premiumChannelsFee = premiumChannels * 7.5;
  }

  const total = processingFee + basicServiceFee + premiumChannelsFee;

  resultDiv.textContent = `Hóa đơn cho khách hàng ${customerCode}: $${total.toFixed(
    2
  )}`;
}
