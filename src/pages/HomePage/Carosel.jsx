import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Carosel() {
  return (
    <section className="carousel">
      <div className="container">
      <main className="carousel-main">
          <h1>KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h1>
          <p>Trở thành lập trình viên chuyên nghiệp tại Cybersoft</p>
          <NavLink className="custom-btn animation text-dark mr-3" to="/danhmuckhoahoc">XEM KHÓA HỌC</NavLink>
      </main>
      </div>
    </section>
  )
}
