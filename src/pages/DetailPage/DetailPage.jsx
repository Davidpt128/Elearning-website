import React from 'react'
import { http } from '../../ulti/setting';
import { Button } from "antd";
import { NavLink } from "react-router-dom";

async function dangky1(){
  let code = http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
  let result = http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=LTC_GP01');
  let infor = [];
  try {
    let data = result.data;
    // console.log(data);
    for(let i = code.length; i < code.length; i++){
      infor.push(data[i]);
    }
  }
  catch(err){
    console.log(err);
  }

  for(let data of infor){
    console.log(data);
  }

}


export default function DetailPage(props) {
  return (
    <div className="col-3">
            <div className="item">
              <div className="content">
                <i className="fab fa-autoprefixer" />
                <h1>Thành thạo Bootstrap qua 10 website</h1>
                <Button className="btn btn-warning" onClick={dangky1}>Đăng ký</Button>
              </div>
            </div>
          </div>
  )
}
