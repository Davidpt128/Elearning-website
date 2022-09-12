import "../../assets/scss/pages/_list-page.scss";
import React, { useState, useEffect } from "react";
import { http } from "../../ulti/setting"
import { useSelector } from "react-redux";

export default function ListPage(props) {
  const [listCourse, setListCourse] = useState([]);
  let maDanhMuc = props.location.search.slice(11).slice(null,-12)
  let listDanhMuc = useSelector((rootReducers) => rootReducers.listOfCoursesReducer)
  let danhMuc = listDanhMuc.find(danhMuc => danhMuc.maDanhMuc === maDanhMuc)
  // console.log('tendanhmuc',tenDanhMuc)
  // console.log('maDanhMuc',maDanhMuc)
  // console.log('danhMuc',danhMuc.tenDanhMuc)


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
    <div style={{minHeight:'100vh'}}>
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
      </div>
    </div>
  )
}
