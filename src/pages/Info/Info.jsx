import userEvent from '@testing-library/user-event'
import { Button } from 'antd/lib/radio'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { http } from '../../ulti/setting'
import Item from '../../components/Item/Item'



export default function Info() {
  const [listCourse, setListCourse] = useState([]);
  let user = useSelector((rootReducers) => rootReducers.infoUserReducer)


  useEffect(() => {
    const getCourse = async () => {
      try {
        const result = await http.post(`/api/QuanLyNguoiDung/ThongTinNguoiDung`, { taiKhoan: user.data.taiKhoan });
        console.log('LayKhoaHocTheoDanhMuc', result.data);

        setListCourse(result.data.chiTietKhoaHocGhiDanh);
      } catch (error) {
        console.log(error);
      }
    }
    getCourse();
  },[])
  

  let araesCourse = async (maKhoaHoc) => {
    try {
      const result = await http.post(`/api/QuanLyKhoaHoc/HuyGhiDanh`, {  maKhoaHoc: maKhoaHoc,taiKhoan: user.data.taiKhoan});
      console.log('HuyKhoaHoc', result.data);
      alert(result.data)
      const getCourse = async () => {
        try {
          const result = await http.post(`/api/QuanLyNguoiDung/ThongTinNguoiDung`, { taiKhoan: user.data.taiKhoan });
          console.log('LayKhoaHocTheoDanhMuc', result.data);
  
          setListCourse(result.data.chiTietKhoaHocGhiDanh);
        } catch (error) {
          console.log(error);
        }
      }
      getCourse();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className='info'>
      <div className='container'>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link text-warning active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">THÔNG TIN CÁ NHÂN</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link text-warning" id="courses-tab" data-toggle="tab" href="#courses" role="tab" aria-controls="courses" aria-selected="false">KHÓA HỌC CỦA TÔI</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          {/* THÔNG TIN CÁ NHÂN */}
          <div className="personalInfo tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user.data.email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Họ Tên</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user.data.hoTen}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Số điện thoại</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user.data.soDT}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Tài khoản</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user.data.taiKhoan}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mật khẩu</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <p>*********</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <button className="btn btn-warning " href="#">Thay đổi thông tin</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* KHÓA HỌC CỦA TÔI */}
          <div className="courses tab-pane fade" id="courses" role="tabpanel" aria-labelledby="courses-tab">
            <div className='content'>
              <h2>CÁC KHÓA HỌC ĐÃ ĐĂNG KÝ</h2>
            </div>
            <div className="list row">
              {listCourse.map((course, index) => {
                return <div className="col-12 col-sm-6 col-lg-3">
                  <Item course={course} index={index} button={'Hủy'} functionButton={araesCourse}></Item>
                </div>
              })}
            </div>
          </div>
        </div>
      </div >
    </section>
  )
}
