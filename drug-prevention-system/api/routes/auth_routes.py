# api/routes/auth_routes.py
from flask import Blueprint, request, jsonify, current_app
from werkzeug.security import check_password_hash
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer, BadSignature, SignatureExpired
from api.models.user import User # Nhập mô hình User mới
from datetime import datetime, timedelta

# Tạo Blueprint cho các route xác thực
auth_bp = Blueprint('auth', __name__, url_prefix='/api/v1/auth')

# Helper function để tạo token
def generate_auth_token(user_id, expiration=3600):
    s = Serializer(current_app.config['SECRET_KEY'], expires_in=expiration)
    return s.dumps({'id': user_id}).decode('utf-8')

# Helper function để xác thực token
def verify_auth_token(token):
    s = Serializer(current_app.config['SECRET_KEY'])
    try:
        data = s.loads(token)
    except (SignatureExpired, BadSignature):
        return None # Token hết hạn hoặc không hợp lệ
    user = User.find_by_id(data['id'])
    return user

@auth_bp.route('/register', methods=['POST'])
def register():
    """
    Đăng ký người dùng mới
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          id: Register
          properties:
            username:
              type: string
            email:
              type: string
            password:
              type: string
    responses:
      201:
        description: Đăng ký thành công.
      400:
        description: Lỗi yêu cầu.
      409:
        description: Người dùng đã tồn tại.
    """
    data = request.get_json()
    if not data or not data.get('username') or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Thiếu thông tin đăng ký.'}), 400

    existing_user = User.find_by_email(data['email'])
    if existing_user:
        return jsonify({'message': 'Người dùng với email này đã tồn tại.'}), 409

    new_user = User(
        username=data['username'],
        email=data['email'],
        password=data['password']
    )
    new_user.save()

    return jsonify({'message': 'Đăng ký thành công!'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    """
    Đăng nhập người dùng
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          id: Login
          properties:
            email:
              type: string
            password:
              type: string
    responses:
      200:
        description: Đăng nhập thành công, trả về token.
      401:
        description: Sai email hoặc mật khẩu.
    """
    data = request.get_json()
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Thiếu email hoặc mật khẩu.'}), 400

    user = User.find_by_email(data['email'])

    if user and check_password_hash(user.password, data['password']):
        token = generate_auth_token(user.id)
        return jsonify({'access_token': token})
    else:
        return jsonify({'message': 'Sai email hoặc mật khẩu.'}), 401

