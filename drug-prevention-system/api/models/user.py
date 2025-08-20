#user.py
from infrastructure.databases import db

# Định nghĩa các role người dùng
class Role:
    GUEST = 'Guest'
    MEMBER = 'Member'
    STAFF = 'Staff'
    CONSULTANT = 'Consultant'
    MANAGER = 'Manager'
    ADMIN = 'Admin'

# Định nghĩa model User
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50), default=Role.MEMBER) # Thêm trường role

    def __repr__(self):
        return f'<User {self.username}>'
