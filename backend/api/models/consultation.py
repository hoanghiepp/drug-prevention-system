from datetime import datetime
from infrastructure.databases import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    appointments = db.relationship('Appointment', back_populates='user')


class Consultant(db.Model):
    __tablename__ = 'consultants'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    schedules = db.relationship('ConsultantSchedule', back_populates='consultant')


class ConsultantSchedule(db.Model):
    __tablename__ = 'consultant_schedules'
    id = db.Column(db.Integer, primary_key=True)
    consultant_id = db.Column(db.Integer, db.ForeignKey('consultants.id'), nullable=False)
    available_at = db.Column(db.DateTime, default=datetime.utcnow)

    consultant = db.relationship('Consultant', back_populates='schedules')
    appointment = db.relationship('Appointment', back_populates='schedule', uselist=False)


class Appointment(db.Model):
    __tablename__ = 'appointments'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    schedule_id = db.Column(db.Integer, db.ForeignKey('consultant_schedules.id'), nullable=False)

    user = db.relationship('User', back_populates='appointments')
    schedule = db.relationship('ConsultantSchedule', back_populates='appointment')
