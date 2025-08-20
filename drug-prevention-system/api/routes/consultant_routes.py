from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.database import get_db

router = APIRouter(
    prefix="/consultants",
    tags=["Consultants"]
)

# Tạo lịch tư vấn
@router.post("/schedule", response_model=schemas.ConsultantScheduleCreate)
def create_schedule(schedule: schemas.ConsultantScheduleCreate, db: Session = Depends(get_db)):
    db_schedule = models.ConsultantSchedule(**schedule.dict())
    db.add(db_schedule)
    db.commit()
    db.refresh(db_schedule)
    return db_schedule

# Người dùng đặt lịch hẹn
@router.post("/appointment", response_model=schemas.AppointmentOut)
def book_appointment(appointment: schemas.AppointmentCreate, db: Session = Depends(get_db)):
    schedule = db.query(models.ConsultantSchedule).filter_by(id=appointment.schedule_id).first()

    if not schedule:
        raise HTTPException(status_code=404, detail="Schedule not found")
    if schedule.appointment:
        raise HTTPException(status_code=400, detail="Schedule already booked")

    db_appointment = models.Appointment(**appointment.dict())
    db.add(db_appointment)
    db.commit()
    db.refresh(db_appointment)
    return db_appointment

# Xem lịch hẹn của người dùng
@router.get("/appointments/{user_id}", response_model=list[schemas.AppointmentOut])
def get_user_appointments(user_id: int, db: Session = Depends(get_db)):
    appointments = db.query(models.Appointment).filter_by(user_id=user_id).all()
    return appointments
