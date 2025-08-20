from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from app import db
from api.models.user import User

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"message": "Thiếu thông tin"}), 400

    if User.query.filter((User.username == username) | (User.email == email)).first():
        return jsonify({"message": "Tên đăng nhập hoặc email đã tồn tại"}), 400

    new_user = User(username=username, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Đăng ký thành công", "user": new_user.to_dict()}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"message": "Sai email hoặc mật khẩu"}), 401

    token = create_access_token(identity=user.id)
    return jsonify({"access_token": token, "user": user.to_dict()}), 200

@auth_bp.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "User không tồn tại"}), 404
    return jsonify({"user": user.to_dict()})
