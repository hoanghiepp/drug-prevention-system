from flask import Blueprint, request, jsonify
from models.user import User, db
from utils.validate import validate_user_update

user_bp = Blueprint("user_bp", __name__)

# Lấy danh sách user
@user_bp.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

# Xem chi tiết user
@user_bp.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.to_dict())

# Cập nhật user
@user_bp.route("/users/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.json
    errors = validate_user_update(data)
    if errors:
        return jsonify({"errors": errors}), 400

    if "username" in data:
        user.username = data["username"]
    if "email" in data:
        user.email = data["email"]

    db.session.commit()
    return jsonify(user.to_dict())

# Xóa user
@user_bp.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted successfully"})
