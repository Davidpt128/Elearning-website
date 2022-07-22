import React from "react";
import { NavLink } from "react-router-dom";
import { http } from '../../ulti/setting';
import { Button } from "antd";

async function list() {
  let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
  let dropDown = [];
  try {
    let data = result.data;
    // console.log(data);
    for (let i = 0; i < 6; i++) {
      dropDown.push(data[i]);
    }
  }
  catch (err) {
    console.log(err);
  }

  for (let data of dropDown) {
    console.log(data);
  }

}

export default function HeaderHome(props) {
  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="header-navbar">
          <ul className="navbar-list-1">
            <button className="navbar-item navbar-toggler">
              <i className="fa fa-bars"></i>
            </button>
            <li className="navbar-item">
              <NavLink className="navbar-item-brand" to="/home">
                <img src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg" alt="" />
              </NavLink>
            </li>
            <li className="navbar-item dropdown">
              <a className="nav-link dropdown-toggle" onClick={list} id="navbardropdown">
                Danh mục khóa học
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="" onClick={list}>Lập trình Backend</a>
                <a className="dropdown-item" href="" onClick={list}>Thiết kế Web</a>
                <a className="dropdown-item" href="" onClick={list}>Lập trình di động</a>
                <a className="dropdown-item" href="" onClick={list}>Lập trình Frontend</a>
                <a className="dropdown-item" href="" onClick={list}>Lập trình Full Stack</a>
                <a className="dropdown-item" href="" onClick={list}>Tư duy lập trình</a>
              </div>
            </li>
          </ul>
          <ul className="navbar-list-2">
            <form className="navbar-item form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>
            {/* <NavLink className="navbar-item font-weight-bolder" to="/dangky">Đăng ký</NavLink> */}
            {/* <NavLink className="navbar-item font-weight-bolder" to="/dangnhap" >Đăng nhập</NavLink> */}
            <div className='navbar-item navbar-user dropdown-toggle'>
              <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
              <span>Nguyễn Văn A</span>
              <ul className='navbar-user-menu'>
                <li className='navbar-user-item'>
                  <NavLink to="/thongtinnguoidung">Cập nhật thông tin</NavLink>
                </li>
                <li className='navbar-user-item'>
                  <a href="/" onClick={()=>{localStorage.removeItem("data")}}>Đăng xuất</a>
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
