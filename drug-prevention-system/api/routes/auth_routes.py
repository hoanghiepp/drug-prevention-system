# api/routes/auth_routes.py
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from api.models.user import User
from infrastructure.databases import db
from datetime import timedelta

# Tạo Blueprint cho các route xác thực
auth_bp = Blueprint('auth', __name__, url_prefix='/api/v1/auth')

# API Đăng ký
@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    # Kiểm tra xem dữ liệu có đầy đủ không
    if not data or not data.get('username') or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Thiếu thông tin đăng ký.'}), 400

    # Kiểm tra xem email đã tồn tại chưa
    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return jsonify({'message': 'Người dùng với email này đã tồn tại.'}), 409

    # Tạo người dùng mới và lưu vào database
    new_user = User(username=data['username'], email=data['email'])
    new_user.set_password(data['password'])
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Đăng ký thành công!'}), 201

# API Đăng nhập
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    # Kiểm tra xem email và mật khẩu có đầy đủ không
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Thiếu email hoặc mật khẩu.'}), 400

    # Tìm người dùng trong database
    user = User.query.filter_by(email=data['email']).first()

    # Kiểm tra mật khẩu
    if user and user.check_password(data['password']):
        # Tạo JWT token và trả về
        access_token = create_access_token(identity=user.id, expires_delta=timedelta(hours=1))
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({'message': 'Sai email hoặc mật khẩu.'}), 401
