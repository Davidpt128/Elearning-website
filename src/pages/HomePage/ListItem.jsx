import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/pages/_home-page.scss";
import { http } from '../../ulti/setting';
// import axios from 'axios'; // no configuration
import { Button } from "antd";

export default function ListItem(props) {

  const [listCourse, setListCourse] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const result = await http.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc');
        // console.log('danhSachKhoaHoc',result.data);
        setListCourse(result.data);
        // console.log('listCourse', listCourse);

      } catch (error) {
        console.log(error);
      }
    }
    getCourse();
  }, []);

  return (
    <section className="listItem" id="listItem">
      <div className="container">
        <h1>Các khóa học mới nhất</h1>
        <div className="list row">
          {listCourse.map((course, index) => {
            return <div className="col-12 col-sm-6 col-lg-3">
              <div key={index} className="item">
                <div className="content">
                  <div className="thumbnail">
                    <img src={course.hinhAnh} alt="" />
                  </div>
                  <div>
                    <h1>{course.tenKhoaHoc}</h1>
                    <div className="readmore">
                      <button className="custom-btn animation">Đăng ký</button>
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
