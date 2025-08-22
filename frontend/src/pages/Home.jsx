import React from "react";

export default function Home() {
  return (
    <div className="page">
      <h1>Drug Use Prevention Support System</h1>
      <p>
        Nền tảng hỗ trợ cộng đồng: khóa học, khảo sát rủi ro, đặt lịch tư vấn và
        báo cáo.
      </p>

      <section className="cards">
        <div className="card">
          <h3>Khóa học</h3>
          <p>
            Đăng ký các khóa đào tạo theo độ tuổi: học sinh, sinh viên, phụ
            huynh, giáo viên.
          </p>
        </div>
        <div className="card">
          <h3>Khảo sát</h3>
          <p>
            Thực hiện ASSIST/CRAFFT để đánh giá mức độ rủi ro và nhận khuyến
            nghị.
          </p>
        </div>
        <div className="card">
          <h3>Tư vấn</h3>
          <p>Đặt lịch trực tuyến với chuyên viên tư vấn.</p>
        </div>
      </section>
    </div>
  );
}
