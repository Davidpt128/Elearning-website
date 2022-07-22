import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/pages/_userpage.scss";
import Pagination from "../../components/Pagination/Pagination";

export default function UserPage(props) {
  return (
    <section className="user">
      <div className="container">
        <a className="">
          Thêm người dùng
        </a>
        <form>
          <div className="row form-outline mb-4">
            <input
              type="text"
              id=""
              className="col-10 form-control form-control-lg"
              placeholder="Tài khoản hoặc họ tên người dùng"
            />
            <button
              type="button"
              className="col-2 custom-btn animation text-body"
            >
              Tìm
            </button>
          </div>
        </form>
        {/* Bảng danh sách thông tin */}
        <div class="mt-2">
          <table class="table">
            <thead>
              <tr>
                <th>Số thứ tự</th>
                <th>Tài khoản</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Thao tác</th>
                <th></th>
              </tr>
            </thead>
            <tbody id=""></tbody>
          </table>
        </div>
        {/* Nút qua trang */}
        <Pagination/>
      </div>
    </section>
  );
}
