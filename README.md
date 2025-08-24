## 📂 Project Structure backend

```bash
drug-prevention-system/
│
├── __pycache__/                 # Cache Python (tự sinh)
│
├── api/                         # Chứa toàn bộ API (models, routes, services)
│   ├── __pycache__/
│   │
│   ├── models/                  # Các model (ORM classes cho database)
│   │   ├── consultation.py      # Model cho Consultation
│   │   ├── course.py            # Model cho Course
│   │   ├── survey.py            # Model cho Survey
│   │   └── user.py              # Model cho User
│   │
│   ├── routes/                  # Các API route (FastAPI routers)
│   │   ├── auth_routes.py       # Đăng nhập, đăng ký, xác thực
│   │   ├── consultant_routes.py # API cho Consultant
│   │   ├── course_routes.py     # API cho Course
│   │   ├── survey_routes.py     # API cho Survey
│   │   └── user_routes.py       # API cho User
│   │
│   ├── services/                # Business logic
│   │   └── utils/               # Các helper, validate input
│   │       ├── validate.py
│   │       └── __init__.py
│
├── infrastructure/              # Tầng hạ tầng (database, repository, …)
│   ├── databases.py             # Khởi tạo SQLAlchemy Session, Engine
│   └── __pycache__/
│
├── instance/                    # Config runtime (instance-specific)
│
├── migrations/                  # Alembic migration files (versioned schema)
│
├── app.py                       # Entry point (khởi chạy FastAPI/Flask app)
├── config.py                    # File cấu hình (DB_URI, JWT_SECRET, …)
├── requirements.txt             # Danh sách thư viện cần cài
└── README.md                    # Tài liệu dự án

```
```bash
## 📂 Project Structure frontend
frontend/
└─ src/
   ├─ api/                      # (trống) Nên đặt hàm gọi API/axios ở đây
   ├─ assets/                   # Ảnh, svg… dùng trong code (được bundle bởi Vite)
   │   ├─ ảnh ma túy.jpg        # Nên đổi tên không dấu/không khoảng trắng
   │   └─ react.svg
   ├─ components/               # Thành phần tái sử dụng
   │   ├─ Footer.jsx
   │   ├─ Navbar.jsx
   │   └─ ProtectedRoute.jsx    # Chặn route cần đăng nhập
   ├─ pages/                    # Các trang (mỗi route một trang)
   │   ├─ About.jsx / About.css
   │   ├─ Consultation.jsx / Consultation.css
   │   ├─ Courses.jsx / Courses.css
   │   ├─ Dashboard.jsx / Dashboard.css
   │   ├─ Home.jsx
   │   ├─ Login.jsx / Login.css
   │   ├─ Media.jsx
   │   ├─ Register.jsx
   │   ├─ Specialists.jsx
   │   └─ Survey.jsx
   ├─ App.css                   # Style chung cho App
   ├─ App.jsx                   # Khai báo router/khung trang
   ├─ firebase.js               # Cấu hình Firebase (auth/storage… nếu dùng)
   ├─ index.css                 # CSS global
   ├─ main.jsx                  # Entry ReactDOM → render <App/>
   └─ vite.config.js            # Cấu hình Vite (có thể thêm alias '@')
```
