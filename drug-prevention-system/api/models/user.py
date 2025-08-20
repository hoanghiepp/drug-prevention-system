#user.py
from infrastructure.databases import db # Giả định db đã được khởi tạo
from werkzeug.security import generate_password_hash, check_password_hash

# Định nghĩa các vai trò (role) của người dùng
class Role:
    MEMBER = 'Member' # Vai trò mặc định cho người dùng

# Định nghĩa model User
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50), default=Role.MEMBER)
    
    # Mã hóa mật khẩu khi lưu
    def set_password(self, password):
        self.password = generate_password_hash(password)

    # Kiểm tra mật khẩu
    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return f'<User {self.username}>'
