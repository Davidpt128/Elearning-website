import React from 'react'
import { Button } from "antd";
import { NavLink } from 'react-router-dom';


export default function DetailPage(props) {

  return (
    <div className="detail">
      <div className="container">
        <div className="banner">
          <div className='row'>
            <div className='col-12 col-lg-7'>
              <h1>LẬP TRÌNH FRONT END</h1>
              <button>Đăng ký</button>
            </div>
            <div className="col-0 col-lg-5">
              <img src="https://elearning0706.cybersoft.edu.vn/hinhanh/cong-nghe-phan-mem_gp01.png" />
            </div>
          </div>
        </div>
        <div className='introduction'>
          <h2>Giới thiệu khóa học</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error incidunt recusandae ea perspiciatis enim beatae placeat, eius id. Eius doloremque reprehenderit possimus tenetur nobis sequi consequatur corporis illum eligendi vero explicabo voluptatibus quia nemo neque veritatis temporibus rem natus, dicta minima assumenda expedita. Impedit, consequatur ipsa maxime voluptas sint alias?</p>
        </div>
      </div>
    </div>
  )
}
