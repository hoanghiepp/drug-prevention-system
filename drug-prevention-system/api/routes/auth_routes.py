# api/routes/auth_routes.py
from flask import Blueprint, request, jsonify
from flask_restx import Api, Resource
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required
from api.models.user import User # Giả định file này đã có model User
from api.swagger import spec
from infrastructure.databases import db
from datetime import timedelta

# Tạo Blueprint cho các route xác thực
auth_bp = Blueprint('auth', __name__)
auth_api = Api(auth_bp, doc='/')

@auth_api.route('/register')
class Register(Resource):
    def post(self):
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
                  description: Tên người dùng.
                email:
                  type: string
                  description: Email người dùng.
                password:
                  type: string
                  description: Mật khẩu.
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
            return {'message': 'Thiếu thông tin đăng ký.'}, 400

        # Kiểm tra xem người dùng đã tồn tại chưa
        existing_user = User.query.filter_by(email=data['email']).first()
        if existing_user:
            return {'message': 'Người dùng với email này đã tồn tại.'}, 409

        # Mã hóa mật khẩu
        hashed_password = generate_password_hash(data['password'])

        # Tạo người dùng mới và lưu vào database
        new_user = User(
            username=data['username'],
            email=data['email'],
            password=hashed_password
        )
        db.session.add(new_user)
        db.session.commit()

        return {'message': 'Đăng ký thành công!'}, 201

@auth_api.route('/login')
class Login(Resource):
    def post(self):
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
                  description: Email người dùng.
                password:
                  type: string
                  description: Mật khẩu.
        responses:
          200:
            description: Đăng nhập thành công, trả về JWT.
          401:
            description: Sai email hoặc mật khẩu.
        """
        data = request.get_json()
        if not data or not data.get('email') or not data.get('password'):
            return {'message': 'Thiếu email hoặc mật khẩu.'}, 400

        # Tìm người dùng trong database
        user = User.query.filter_by(email=data['email']).first()

        # Kiểm tra mật khẩu
        if user and check_password_hash(user.password, data['password']):
            # Tạo JWT token
            access_token = craeate_access_token(identity=user.id, expires_delta=timedelta(hours=1))
            return jsonify(access_token=access_token)
        else:
            return {'message': 'Sai email hoặc mật khẩu.'}, 401

# Đăng ký các routes đã tạo vào OpenAPI spec
spec.path(view=Register.post)
spec.path(view=Login.post)
