# models/survey.py
from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from infrastructure.databases import Base
import datetime


# --- Bảng Survey (Khảo sát) ---
class Survey(Base):
    __tablename__ = "surveys"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    target_group = Column(String(100))  
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    # Quan hệ với SurveyQuestion
    questions = relationship("SurveyQuestion", back_populates="survey", cascade="all, delete-orphan")
    # Quan hệ với SurveyResult
    results = relationship("SurveyResult", back_populates="survey", cascade="all, delete-orphan")


# --- Bảng SurveyQuestion (Câu hỏi khảo sát) ---
class SurveyQuestion(Base):
    __tablename__ = "survey_questions"

    id = Column(Integer, primary_key=True, index=True)
    survey_id = Column(Integer, ForeignKey("surveys.id"))
    question_text = Column(String(500), nullable=False)
    
    option_a = Column(String(255))
    option_b = Column(String(255))
    option_c = Column(String(255))
    option_d = Column(String(255))

    score_a = Column(Integer, default=0)
    score_b = Column(Integer, default=0)
    score_c = Column(Integer, default=0)
    score_d = Column(Integer, default=0)

    survey = relationship("Survey", back_populates="questions")


# --- Bảng SurveyResult (Kết quả khảo sát) ---
class SurveyResult(Base):
    __tablename__ = "survey_results"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    survey_id = Column(Integer, ForeignKey("surveys.id"))
    total_score = Column(Integer)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    # Liên kết User và Survey
    user = relationship("User", back_populates="survey_results")
    survey = relationship("Survey", back_populates="results")
