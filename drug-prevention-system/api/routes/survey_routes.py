from flask import Blueprint, request, jsonify
from api.models.survey import Survey, SurveyQuestion, SurveyResult
from database import db_session

survey_bp = Blueprint("survey", __name__)


@survey_bp.route("/surveys", methods=["POST"])
def create_survey():
    data = request.json
    survey = Survey(
        title=data["title"],
        description=data.get("description"),
        target_group=data.get("target_group")
    )
    db_session.add(survey)
    db_session.commit()
    return jsonify({"message": "Survey created", "id": survey.id})



@survey_bp.route("/surveys", methods=["GET"])
def get_surveys():
    surveys = db_session.query(Survey).all()
    return jsonify([{
        "id": s.id,
        "title": s.title,
        "target_group": s.target_group
    } for s in surveys])



@survey_bp.route("/surveys/<int:survey_id>/submit", methods=["POST"])
def submit_survey(survey_id):
    data = request.json
    user_id = data["user_id"]
    answers = data["answers"] 

    total_score = 0
    for q_id, answer in answers.items():
        question = db_session.get(SurveyQuestion, q_id)
        if not question:
            continue
        score = getattr(question, f"score_{answer.lower()}", 0)
        total_score += score

    result = SurveyResult(
        user_id=user_id,
        survey_id=survey_id,
        total_score=total_score
    )
    db_session.add(result)
    db_session.commit()

    
    if total_score >= 10:
        recommendation = "Bạn nên gặp chuyên viên tư vấn."
    elif total_score >= 5:
        recommendation = "Bạn nên tham gia khóa học nâng cao nhận thức."
    else:
        recommendation = "Bạn đang ở mức nguy cơ thấp. Chúc mừng! Hãy tiếp tục cố gắng duy trì nhé!"

    return jsonify({
        "message": "Survey submitted",
        "score": total_score,
        "recommendation": recommendation
    })
