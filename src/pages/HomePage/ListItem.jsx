import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/pages/_home-page.scss";
import { http } from '../../ulti/setting';
// import axios from 'axios'; // no configuration
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

export default function ListItem(props) {
  const [listCourse, setListCourse] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCourse = async () => {
      try {
        const result = await http.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc');
        // console.log('danhSachKhoaHoc', result.data);
        setListCourse(result.data);

        const action = {
          type: 'GET_KHOA_HOC',
          data: result.data
        }
        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    }
    getCourse();
  }, []);

  return (
    <section className="listItem" id="listItem">
      <div className="container">
        <h1>Tất cả khóa học mới nhất</h1>
        <div className="list row">
          {listCourse.map((course, index) => {
            return <div className="col-12 col-sm-6 col-lg-3">
              <div key={index} className="item">
                <div className="content">
                  <div className="thumbnail">
                    <img className="img" src={course.hinhAnh} alt=''/>
                  </div>
                  <div>
                    <h1>{course.tenKhoaHoc}</h1>
                    <div className="readmore">
                      <NavLink className="custom-btn animation" to={`chitiet/${course.maKhoaHoc}`}>Chi tiết</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  );
}
