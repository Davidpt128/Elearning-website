import "../../assets/scss/pages/_list-page.scss";
import React, { useState, useEffect } from "react";
import { http } from "../../ulti/setting"
import { useSelector } from "react-redux";
import Item from "../../components/Item/Item";
import { NavLink } from "react-router-dom";

export default function ListPage(props) {
  const [listCourse, setListCourse] = useState([]);
  let maDanhMuc = props.location.search.slice(11)
  let listDanhMuc = useSelector((rootReducers) => rootReducers.catalogReducer)
  let danhMuc = listDanhMuc.find(danhMuc => danhMuc.maDanhMuc === maDanhMuc)



  useEffect(() => {
    const getCourse = async () => {
      try {
        let url = props.location.search;
        const result = await http.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc${url}`);
        // console.log('LayKhoaHocTheoDanhMuc', result.data);

        setListCourse(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCourse();
  }, [props.location.search]);

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className='line'>
        <div className="container">
          <h1>{danhMuc.tenDanhMuc}</h1>
        </div>
      </div>
      <div className="listStu">
        <div className="container">
          {/* <h2>Các khóa học phổ biến</h2> */}
          <div className="list row">
            {listCourse.map((course, index) => {
              return <div className="col-12 col-sm-6 col-lg-3">
                <div key={index} className="item">
                  <div className="content">
                    <div className="thumbnail">
                      <img className="img" src={course.hinhAnh} alt='' />
                    </div>
                    <div>
                      <h1>{course.tenKhoaHoc}</h1>
                      <div className="readmore">
                        <NavLink className="custom-btn animation" to={`chitiet/${course.maKhoaHoc}`}>Đăng ký</NavLink>
                      </div>
                    </div>
                  </div>
                </div>              
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
