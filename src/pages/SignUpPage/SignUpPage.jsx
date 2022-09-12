import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { http } from '../../ulti/setting';
import { Button } from "antd";
import { Validation } from "../../validation/Validation";
import { history } from '../../App';


let kiemTra = new Validation();

async function dangky(taiKhoan, matKhau, nhapLaiMatKhau, hoTen, soDT, email, maNhom) {
  console.log(taiKhoan, matKhau);

  const body = {
    taiKhoan: taiKhoan,
    matKhau: matKhau,
    hoTen: hoTen,
    soDT: soDT,
    email: email,
    maNhom: maNhom,
  };
  console.log('body',body);
  
  /*Validation*/
  let valid = true;
  //Kiểm tra rỗng
  valid &= kiemTra.kiemTraRong(taiKhoan,'#error_required_taiKhoan') 
  & kiemTra.kiemTraRong(matKhau,'#error_required_matKhau')
  & kiemTra.kiemTraRong(nhapLaiMatKhau,'#error_required_nhapLaiMatKhau')
  & kiemTra.kiemTraRong(hoTen,'#error_required_hoTen')
  & kiemTra.kiemTraRong(email,'#error_required_email')
  & kiemTra.kiemTraRong(soDT,'#error_required_soDT')
  //Kiểm tra kí tự tài khoản
  valid &= kiemTra.kiemTraKiTu(taiKhoan,'#error_regex_taiKhoan');
  //Kiểm tra nhập lại mật khẩu
  valid &= kiemTra.kiemTraNhapLai(matKhau,nhapLaiMatKhau,'#error_retype_nhapLaiMatKhau');
  //Kiểm tra email
  valid &= kiemTra.kiemTraEmail(email,'#error_regex_email');
  if(valid != true){
    return;
  }


  try {
    const result = await http.post(
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      body
    );
    console.log(result);
    alert("Đăng kí thành công!");
    history.push('/dangnhap')
  } catch (error) {
    alert(error.response.data);
    console.log(error.response.data);
  }
}

export default function RegisterPage(props) {
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [soDT, setSoDT] = useState("");
  const [nhapLaiMatKhau, setNhapLaiMatKhau] = useState("");
  const [email, setEmail] = useState("");
  const [maNhom, setMaNhom] = useState("GP01");
  
  return (
    <section className="register">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Đăng ký</h2>
                <form>
                  <div className="form-outline">
                    <input type="text" id="taiKhoan" className="form-control form-control-lg" placeholder='Tài khoản' onChange={(event) => setTaiKhoan(event.target.value)} />
                    <p className="text-danger error" id="error_required_taiKhoan"></p>
                    <p className="text-danger error" id="error_regex_taiKhoan"></p>
                  </div>
                  <div className="form-outline">
                    <input type="password" id="matKhau" className="form-control form-control-lg" placeholder='Mật khẩu' onChange={(event) => setMatKhau(event.target.value)} />
                    <p className="text-danger error" id="error_required_matKhau"></p>
                  </div>
                  <div className="form-outline">
                    <input type="password" id="nhapLaiMatKhau" className="form-control form-control-lg" placeholder='Nhập lại mật khẩu' onChange={(event) => setNhapLaiMatKhau(event.target.value)} />
                    <p className="text-danger error" id="error_required_nhapLaiMatKhau error_retype_nhapLaiMatKhau"></p>
                    <p className="text-danger error" id="error_retype_nhapLaiMatKhau"></p>
                  </div>
                  <div className="form-outline">
                    <input type="text" id="hoTen" className="form-control form-control-lg" placeholder='Họ tên' onChange={(event) => setHoTen(event.target.value)} />
                    <p className="text-danger error" id="error_required_hoTen"></p>
                  </div>
                  <div className="form-outline">
                    <input type="email" id="email" className="form-control form-control-lg" placeholder='Email' onChange={(event) => setEmail(event.target.value)} />
                    <p className="text-danger error" id="error_required_email error_regex_email"></p>
                    <p className="text-danger error" id="error_regex_email"></p>
                  </div>
                  <div className="form-outline">
                    <input type="number" id="soDT" className="form-control form-control-lg" placeholder='Số điện thoại' onChange={(event) => setSoDT(event.target.value)} />
                    <p className="text-danger error" id="error_required_soDT"></p>
                  </div>
                  <div className="form-outline">
                    <select className='form-control form-control-lg' id="maNhom" onChange={(event) => setMaNhom(event.target.value)}>
                      <option value="GP01">GP01</option>
                      <option value="GP02">GP02</option>
                      <option value="GP03">GP03</option>
                      <option value="GP04">GP04</option>
                      <option value="GP05">GP05</option>
                      <option value="GP06">GP06</option>
                      <option value="GP07">GP07</option>
                      <option value="GP08">GP08</option>
                      <option value="GP09">GP09</option>
                      <option value="GP10">GP10</option>
                    </select>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button type="button" onClick={() => dangky(taiKhoan, matKhau, nhapLaiMatKhau, hoTen, soDT, email, maNhom)} className="custom-btn animation btn-block btn-lg gradient-custom-4 text-body">Đăng ký</Button>
                  </div>
                  <p className="text-center text-muted mt-5 mb-0">Bạn đã có tài khoản? <NavLink to="/dangnhap" className="fw-bold text-body"><u>Đăng nhập</u></NavLink></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}