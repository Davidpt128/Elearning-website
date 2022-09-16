import React, { useEffect } from 'react'
import { Button } from "antd";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { http } from '../../ulti/setting';
import { history } from '../../App';


export default function DetailPage(props) {
  let postId = props.match.params.postid
  // console.log('postid',postId)

  let listCourse = useSelector((rootReducers) => rootReducers.listCourseReducer)
  let user = useSelector((rootReducers) => rootReducers.infoUserReducer)
  let course = listCourse.find(course => course.maKhoaHoc === postId)
  console.log('user', user)

  function registerCourse() {

    const body = {
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan: user.data.taiKhoan,
    }
    const postCourse = async () => {
      try {
        const result = await http.post('/api/QuanLyKhoaHoc/DangKyKhoaHoc',
          body);
        console.log('result', result.data)
        alert(result.data)
        history.goBack()
      } catch (error) {
        console.log(error);
        alert(error.response.data)
        history.goBack()
      }
    }
    postCourse();
  }

  return (
    <div className="detail">
      <div className="banner">
        <div className="container">
          <div className='row'>
            <div className='col-12 col-lg-7'>
              <h1>{course.tenKhoaHoc}</h1>
              <button onClick={() => { registerCourse(course, user) }}>Đăng ký</button>
            </div>
            <div className="col-0 col-lg-5">
              <img src={course.hinhAnh} />
            </div>
          </div>
        </div>
      </div>
      <div className='introduction'>
        <div className="container">
          <h2>Giới thiệu khóa học</h2>
          <p>{course.moTa}</p>
        </div>
      </div>
    </div>
  )
}
