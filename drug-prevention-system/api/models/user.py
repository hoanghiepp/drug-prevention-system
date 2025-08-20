#user.py

from werkzeug.security import generate_password_hash

# Giả lập cơ sở dữ liệu người dùng bằng một từ điển

_users = {}
_next_user_id = 1

class Role:
    GUEST = 'Guest'
    MEMBER = 'Member'
    STAFF = 'Staff'
    CONSULTANT = 'Consultant'
    MANAGER = 'Manager'
    ADMIN = 'Admin'

class User:
    def __init__(self, username, email, password, role=Role.MEMBER):
        global _next_user_id
        self.id = _next_user_id
        _next_user_id += 1
        self.username = username
        self.email = email
        self.password = generate_password_hash(password)
        self.role = role

    @staticmethod
    def find_by_email(email):
        """Tìm người dùng theo email."""
        for user_id, user in _users.items():
            if user.email == email:
                return user
        return None
    
    @staticmethod
    def find_by_id(user_id):
        """Tìm người dùng theo ID."""
        return _users.get(user_id)

    def save(self):
        """Lưu người dùng vào 'CSDL' giả lập."""
        _users[self.id] = self

    def to_dict(self):
        """Chuyển đổi đối tượng người dùng thành từ điển."""
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'role': self.role
        }

