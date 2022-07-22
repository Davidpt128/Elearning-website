import { NavLink, Route } from 'react-router-dom'
import React from "react";

export default function AdminTemplate(props) {
  // let list = document.querySelectorAll('.list');
  // for (let i=0; i<list.length; i++){
  //   list[i].onlick = function(){
  //     let j=0;
  //     while(j<list.length){
  //       list[j++].className='list';
  //     }
  //     list[i].className='list active';
  //   }
  // }
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <div className='container'>
            <div className='row' style={{ height: '100vh' }}>
              <div className='sidebar col-12 col-lg-3'>
                <div className="sidebar-brand">
                  <a href="/"><img src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg" alt="" /></a>
                </div>
                <div className="sidebar-menu">
                  <ul className='sidebar-menu-list'>
                    <li className='list active'>
                      <NavLink to="/quanlykhoahoc"><i className="fab fa-leanpub"></i><span>Quản lý khóa học</span></NavLink>
                    </li>
                    <li className='list'>
                      <NavLink to="/quanlynguoidung"><i className="fa fa-users"></i><span>Quản lý người dùng</span></NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="layout col-12 col-lg-9">
                <div className='header'>
                  <div className='navbar-toggler'>
                    <input type='checkbox' id='check' />
                    <label for='check' className="checkbtn">
                      <i className="fa fa-bars"></i>
                    </label>
                  </div>                 
                  <div className='navbar-user dropdown-toggle'>
                    <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
                    <span>Nguyễn Văn A</span>
                    <ul className='navbar-user-menu'>
                      <li className='navbar-user-item'>
                        <a href="">Cập nhật thông tin</a>
                      </li>
                      <li className='navbar-user-item'>
                        <a href="">Đăng xuất</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <props.component {...propsRoute} />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  )

}
