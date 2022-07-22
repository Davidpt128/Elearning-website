import React from "react";
import { NavLink } from "react-router-dom";

export default function UpdateUser(props) {
  return (
    <section className="updateuser">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Thêm người dùng
                  </h2>
                  <form>
                    <div className="form-outline mb-4">
                      Tài khoản
                      <input
                        type="text"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      Họ tên
                      <input
                        type="name"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      Email
                      <input
                        type="email"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      Số điện thoại
                      <input
                        type="number"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div class="form-group">
                      Loại người dùng
                      <select class="form-control" id="">
                        <option>Giáo viên</option>
                        <option>Học viên</option>
                      </select>
                    </div>
                    <div className="form-outline mb-4">
                      Lượt xem
                      <input
                        type="number"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div class="form-group">
                      Người tạo
                      <select class="form-control" id="">
                        <option>TRƯƠNG TẤN KHẢI</option>
                        <option>ABCDEFGHIJK</option>
                      </select>
                    </div>
                  </form>
                  <div className="add">
                    <button
                      type="button"
                      className="custom-btn animation text-body mr-2"
                    >
                      Thêm
                    </button>
                    <button
                      type="button"
                      className="custom-btn animation text-body"
                    >
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
