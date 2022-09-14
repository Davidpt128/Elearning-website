import React, { useEffect } from 'react'
import { Button } from "antd";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function DetailPage(props) {
  let postId = props.match.params.postid
  // console.log('postid',postId)
  
  let listCourse = useSelector((rootReducers) => rootReducers.listCourseReducer)
  let course = listCourse.find(course => course.maKhoaHoc === postId)
  // console.log('course',course)
  

  return (
    <div className="detail">
      <div className="banner">
        <div className="container">
          <div className='row'>
            <div className='col-12 col-lg-7'>
              <h1>{course.tenKhoaHoc}</h1>
              <button>Đăng ký</button>
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
