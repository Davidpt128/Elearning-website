import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { http } from '../../ulti/setting';


export default function HeaderHome(props) {
  const [dropdown,setDropdown] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const result = await http.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
        // console.log('LayDanhMucKhoaHoc',result.data);
        setDropdown(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCourse();
  }, []);

  const isLoggedIn = useSelector((rootReducers) => rootReducers.isLoggedInReducer.isLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector((rootReducers) => rootReducers.infoUserReducer.data)

  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="header-navbar">
          <ul className="navbar-list-1">
            <button className="navbar-item navbar-toggler">
              <i className="fa fa-bars"></i>
            </button>
            <li className="navbar-item">
              <NavLink className="navbar-item-brand" to="/home">
                <img src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg" alt="" />
              </NavLink>
            </li>
            <li className="navbar-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbardropdown">
                Danh mục khóa học
              </a>
              <div className="dropdown-menu">
                {dropdown.map((item,index)=>{
                  return <a className="dropdown-item" key={index} href="" >{item.tenDanhMuc}</a>
                })}
              </div>
            </li>
          </ul>
          <ul className="navbar-list-2">
            <form className="navbar-item form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>

            {isLoggedIn ? <>
              <div className='navbar-item navbar-user dropdown-toggle'>
                <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
                <span>{user.hoTen}</span>
                <ul className='navbar-user-menu'>
                  <li className='navbar-user-item'>
                    <NavLink to="/thongtinnguoidung">Cập nhật thông tin</NavLink>
                  </li>
                  <li className='navbar-user-item'>
                    <a href="/" onClick={() => {
                      localStorage.removeItem("data");
                      const action = {
                        type: 'LOGOUT'
                      };
                      dispatch(action);
                    }}>Đăng xuất</a>
                  </li>
                </ul>
              </div>
            </>
              : <>
                <NavLink className="navbar-item font-weight-bolder" to="/dangky">Đăng ký</NavLink>
                <NavLink className="navbar-item font-weight-bolder" to="/dangnhap" >Đăng nhập</NavLink>
              </>
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}
