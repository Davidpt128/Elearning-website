import React from 'react'
import "../../assets/scss/pages/_class-page.scss"
import Pagination from '../../components/Pagination/Pagination'

export default function ClassPage(props) {
  return (
    <section className="class">
      <div className="container">
        <a className="">
          Thêm khóa học
        </a>
        <form>
          <div className="row form-outline mb-4">
            <input
              type="text"
              id=""
              className="col-10 form-control form-control-lg"
              placeholder="Mã khóa học hoặc tên khóa học"
            />
            <button
              type="button"
              className="col-2 custom-btn animation text-body"
            >
              Tìm
            </button>
          </div>
        </form>
        {/* Bảng danh sách thông tin */}
        <div class="mt-2">
          <table class="table">
            <thead>
              <tr>
                <th>Số thứ tự</th>
                <th>Mã khóa học</th>
                <th>Tên khóa học</th>
                <th>Hình ảnh</th>
                <th>Lượt xem</th>
                <th>Người tạo</th>
                <th>Thao tác</th>
                <th></th>
              </tr>
            </thead>
            <tbody id=""></tbody>
          </table>
        </div>
        {/* Nút qua trang */}
        <Pagination/>
      </div>
    </section>
  )
}
