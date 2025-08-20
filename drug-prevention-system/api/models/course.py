# api/models/course.py
from api import db

# Bảng trung gian lưu quan hệ nhiều-nhiều User - Course
user_course = db.Table(
    'user_course',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('course_id', db.Integer, db.ForeignKey('courses.id'), primary_key=True)
)

class Course(db.Model):
    __tablename__ = "courses"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=True)

    # Quan hệ với User
    users = db.relationship("User", secondary=user_course, back_populates="courses")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description
        }
