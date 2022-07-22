import React from "react";

export default function UpdateClass(props) {
  return (
    <section className="updateclass">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Thêm khóa học
                  </h2>
                  <form>
                    <div className="form-outline mb-4">
                      Mã khóa học
                      <input
                        type="text"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      Tên khóa học
                      <input
                        type="name"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div class="form-group">
                      Danh mục khóa học
                      <select class="form-control" id="">
                        <option>Lập trình Front-End</option>
                        <option>Lập trình Back-End</option>
                      </select>
                    </div>
                    <div className="form-outline mb-4">
                      Đánh giá
                      <input
                        type="text"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      Lượt xem
                      <input
                        type="number"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div class="form-group">
                      Người tạo
                      <select class="form-control" id="">
                        <option>TRƯƠNG TẤN KHẢI</option>
                        <option>ABCDEFGHIJK</option>
                      </select>
                    </div>
                    <div className="form-outline mb-4">
                      Ngày tạo
                      <input
                        type="date"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      Hình ảnh
                      <input
                        type="image"
                        id=""
                        className="form-control form-control-lg"
                      />
                    </div>
                    <button
                      type="button"
                      className="custom-btn animation text-body"
                    >
                      Upload
                    </button>
                  </form>
                  {/* Bảng danh sách thông tin */}
                  <div class="mt-2"> Mô tả
                  </div>
                  {/* Nút qua trang */}
                  <div className="add">
                  <button
                      type="button"
                      className="custom-btn animation text-body mr-2"
                    >
                      Thêm
                    </button>
                    <button
                      type="button"
                      className="custom-btn animation text-body"
                    >
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
