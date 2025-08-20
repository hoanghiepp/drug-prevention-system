from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from app.database import Base
from datetime import datetime

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String)

    appointments = relationship('Appointment', back_populates='user')

class Consultant(Base):
    __tablename__ = 'consultants'
    id = Column(Integer, primary_key=True)
    name = Column(String)

    schedules = relationship('ConsultantSchedule', back_populates='consultant')

class ConsultantSchedule(Base):
    __tablename__ = 'consultant_schedules'
    id = Column(Integer, primary_key=True)
    consultant_id = Column(Integer, ForeignKey('consultants.id'))
    available_at = Column(DateTime)

    consultant = relationship('Consultant', back_populates='schedules')
    appointment = relationship('Appointment', back_populates='schedule', uselist=False)

class Appointment(Base):
    __tablename__ = 'appointments'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    schedule_id = Column(Integer, ForeignKey('consultant_schedules.id'))

    user = relationship('User', back_populates='appointments')
    schedule = relationship('ConsultantSchedule', back_populates='appointment')
