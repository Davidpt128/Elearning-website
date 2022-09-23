import userEvent from '@testing-library/user-event'
import { Button } from 'antd/lib/radio'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { http } from '../../ulti/setting'
import Item from '../../components/Item/Item'
import { Validation } from '../../validation/Validation'
import { history } from '../../App'

let kiemTra = new Validation();


export default function Info() {
  const [listCourse, setListCourse] = useState([]);
  // const [user, setUser] = useState(useSelector((rootReducers) => rootReducers.infoUserReducer));
  let user = useSelector((rootReducers) => rootReducers.infoUserReducer)
  console.log('user',user)

  const [hoTen, setHoTen] = useState(user.hoTen)
  const [soDT, setSoDT] = useState(user.soDT)
  const [matKhau, setMatKhau] = useState('')
  const [nhapLaiMatKhau, setNhapLaiMatKhau] = useState("");

  const dispatch = useDispatch();


  useEffect(() => {
    const getCourse = async () => {
      try {
        const result = await http.post(`/api/QuanLyNguoiDung/ThongTinNguoiDung`, { taiKhoan: user.taiKhoan });
        console.log('LayKhoaHocTheoDanhMuc', result.data);

        setListCourse(result.data.chiTietKhoaHocGhiDanh);
      } catch (error) {
        console.log(error);
      }
    }
    getCourse();
  }, [])


  let araesCourse = async (maKhoaHoc) => {
    try {
      const result = await http.post(`/api/QuanLyKhoaHoc/HuyGhiDanh`, { maKhoaHoc: maKhoaHoc, taiKhoan: user.data.taiKhoan });
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


  async function capNhatThongTin(hoTen, soDT, matKhau, nhapLaiMatKhau) {
    const body = {
      taiKhoan: user.taiKhoan,
      matKhau: matKhau,
      hoTen: hoTen,
      soDT: soDT,
      maLoaiNguoiDung: user.maLoaiNguoiDung,
      maNhom: user.maNhom,
      email: user.email
    }

    try {
      const result = await http.put(
        "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        body
      );
      console.log('result',result.data)
      alert('Cập nhật thành công')
      
      //dispatch
      const action ={
        type: 'CAP_NHAP_THONG_TIN',
        data: result.data
      }
      dispatch(action)

      // // setUser
      // user.hoTen = result.data.hoTen;
      // user.soDT = result.data.soDt;
      // setUser(user);
    } catch (error) {
      console.log('error',error)
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
                    <h6 className="mb-0">Tài khoản</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user.taiKhoan}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user.email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Họ tên</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user.hoTen}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Số điện thoại</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user.soDT}
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
                    <button className="btn btn-warning" data-toggle="modal" data-target="#modelId">Thay đổi thông tin</button>
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
        {/* Button */}
        <div>
          <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Thay đổi thông tin</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* <div className="card mb-3"> */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-5">
                        <h6 className="mb-0">Tài khoản</h6>
                      </div>
                      <div className="col-sm-7 text-secondary">
                        {user.taiKhoan}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-5">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-7 text-secondary">
                        {user.email}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-5">
                        <h6 className="mb-0">Họ tên</h6>
                      </div>
                      <input className='col-sm-7' type="text" value={hoTen} onChange={(event) => setHoTen(event.target.value)} />
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-5">
                        <h6 className="mb-0">Số điện thoại</h6>
                      </div>
                      <input className='col-sm-7' type="text" value={soDT} onChange={(event) => setSoDT(event.target.value)} />
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-5">
                        <h6 className="mb-0">Mật khẩu mới</h6>
                      </div>
                      <input className='col-sm-7' type="text" value={matKhau} onChange={(event) => setMatKhau(event.target.value)} />
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-5">
                        <h6 className="mb-0">Nhập lại mật khẩu</h6>
                      </div>
                      <input className='col-sm-7' type="text" value={nhapLaiMatKhau} onChange={(event) => setNhapLaiMatKhau(event.target.value)} />
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                  <button type="button" className="btn btn-primary" onClick={() => capNhatThongTin(hoTen, soDT, matKhau, nhapLaiMatKhau)}>Lưu</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section>
  )
}
