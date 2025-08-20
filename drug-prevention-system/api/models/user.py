from werkzeug.security import generate_password_hash, check_password_hash
from api import db
from api.models.course import user_course  # Bảng trung gian

# Vai trò người dùng
class Role:
    MEMBER = 'Member'
    STAFF = 'Staff'
    CONSULTANT = 'Consultant'
    MANAGER = 'Manager'
    ADMIN = 'Admin'

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50), default=Role.MEMBER)

    # Quan hệ với Course (many-to-many)
    courses = db.relationship("Course", secondary=user_course, back_populates="users")

    # Mã hóa mật khẩu khi lưu
    def set_password(self, password):
        self.password = generate_password_hash(password)

    # Kiểm tra mật khẩu
    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return f"<User {self.username}>"
