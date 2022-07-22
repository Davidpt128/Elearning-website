import React from "react";
import { NavLink } from "react-router-dom";
import { http } from "../../ulti/setting"



async function dangky1() {
  let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=TuDuy&MaNhom=GP01');
}

export default function ListStu(props) {
  return (
    <div className="listStu">
      <div className="container">
        <h2>Các khóa học phổ biến</h2>
        <div className="list row">
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="list row">
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="list row">
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-12 col-sm-6 col-lg-3">
            <div className="content">
              <div className="thumbnail">
                <img src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png" alt="" />
              </div>
              <div>
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <div className="readmore">
                  <button className="custom-btn animation" >Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
