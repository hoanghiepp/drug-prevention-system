# api/routes/course_routes.py
from flask import Blueprint, request, jsonify
from api import db
from api.models.course import Course
from api.models.user import User

course_bp = Blueprint("course", __name__)

# Tạo khóa học
@course_bp.route("/courses", methods=["POST"])
def create_course():
    data = request.json
    new_course = Course(title=data["title"], description=data.get("description"))
    db.session.add(new_course)
    db.session.commit()
    return jsonify(new_course.to_dict()), 201

# Xem danh sách khóa học
@course_bp.route("/courses", methods=["GET"])
def get_courses():
    courses = Course.query.all()
    return jsonify([c.to_dict() for c in courses]), 200

# Sửa khóa học
@course_bp.route("/courses/<int:course_id>", methods=["PUT"])
def update_course(course_id):
    course = Course.query.get_or_404(course_id)
    data = request.json
    course.title = data.get("title", course.title)
    course.description = data.get("description", course.description)
    db.session.commit()
    return jsonify(course.to_dict()), 200

# Xóa khóa học
@course_bp.route("/courses/<int:course_id>", methods=["DELETE"])
def delete_course(course_id):
    course = Course.query.get_or_404(course_id)
    db.session.delete(course)
    db.session.commit()
    return jsonify({"message": "Course deleted"}), 200

# User đăng ký khóa học
@course_bp.route("/courses/<int:course_id>/register", methods=["POST"])
def register_user(course_id):
    data = request.json
    user_id = data.get("user_id")

    user = User.query.get_or_404(user_id)
    course = Course.query.get_or_404(course_id)

    if user in course.users:
        return jsonify({"message": "User already registered"}), 400

    course.users.append(user)
    db.session.commit()
    return jsonify({"message": f"User {user.username} registered to {course.title}"}), 200
