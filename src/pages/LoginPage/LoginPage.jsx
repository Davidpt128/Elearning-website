import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ACCESSTOKEN, http } from "../../ulti/setting";
import { Button } from "antd";
import { Validation } from "../../validation/Validation";
import { history } from "../../App";
import { useDispatch, useSelector } from "react-redux";

let kiemTra = new Validation();

async function dangNhap(taiKhoan, matKhau, dispatch) {
  // console.log(taiKhoan, matKhau);
  const body = {
    taiKhoan: taiKhoan,
    matKhau: matKhau,
  };
  

  //Check validation
  let valid = true;
  valid &= kiemTra.kiemTraRong(taiKhoan,'#error_required_taiKhoan') & kiemTra.kiemTraRong(matKhau,'#error_required_matKhau');
  if(valid != true){
    return;
  }

  try {
    const result = await http.post(
      "/api/QuanLyNguoiDung/DangNhap",
      body
    );
    document.querySelector('#error_check_matKhau').innerHTML = '';
    // console.log(result.data);
    // console.log(result.data.maLoaiNguoiDung);

    //lưu vô localStorage
    localStorage.setItem("data", JSON.stringify(result.data));
    localStorage.setItem(ACCESSTOKEN, JSON.stringify(result.data.accessToken))

    //dispatch lưu thông tin người dùng lên redux
    const action1 = {
      type: 'GET_INFO_USER',
      data: result.data
    }
    dispatch(action1)

    //dispatch thay đổi biến isLoggedIn
    const action2 = {
      type: "LOGIN",
    }
    dispatch(action2)

    //chuyển hướng trang
    if(result.data.maLoaiNguoiDung === "HV") {
      history.push('/')
    }
    else{
      history.push('/quanlykhoahoc')
    }
  } catch (error) {
    document.querySelector('#error_check_matKhau').innerHTML = 'Tài khoản hoặc mật khẩu không đúng!';
    console.log(error);
  }
}

export default function LoginPage(props) {
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const dispatch = useDispatch();


  return (
    <section className="login">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Đăng nhập</h2>
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="taiKhoan"
                      className="form-control form-control-lg"
                      placeholder="Tài khoản"
                      onChange={(event) => setTaiKhoan(event.target.value)}
                    />
                    <p className="text-danger" id="error_required_taiKhoan"></p>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="matKhau"
                      className="form-control form-control-lg"
                      placeholder="Mật khẩu"
                      onChange={(event) => setMatKhau(event.target.value)}
                    />
                    <p className="text-danger" id="error_required_matKhau"></p>
                    <p className="text-danger" id="error_check_matKhau"></p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button
                      type="button"
                      onClick={() => dangNhap(taiKhoan, matKhau, dispatch)}
                      className="custom-btn animation btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Đăng nhập
                    </Button>
                  </div>
                  <p className="text-center text-muted mt-5 mb-0">
                    Bạn chưa có tài khoản?{" "}
                    <NavLink to="/dangky" className="fw-bold text-body">
                      <u>Đăng kí</u>
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


