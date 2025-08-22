import React, { useEffect, useState } from "react";
import { getSurveys, submitSurvey } from "../api/api";

export default function Survey() {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    getSurveys()
      .then((res) => setSurveys(res.data || []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (surveyId, answers) => {
    // answers: object or array depending backend
    try {
      const res = await submitSurvey(surveyId, { answers });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Submit failed");
    }
  };

  if (loading)
    return (
      <div className="page">
        <p>Loading surveys...</p>
      </div>
    );

  return (
    <div className="page">
      <h2>Surveys</h2>
      {surveys.length === 0 && <p>No surveys available.</p>}
      {surveys.map((s) => (
        <SurveyForm key={s.id} survey={s} onSubmit={handleSubmit} />
      ))}

      {result && (
        <div className="card" style={{ marginTop: 12 }}>
          <h4>Result</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

function SurveyForm({ survey, onSubmit }) {
  const [answers, setAnswers] = useState({});

  const handleChange = (qid, value) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  };

  return (
    <div className="card">
      <h4>{survey.name}</h4>
      <p>{survey.description}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(survey.id, answers);
        }}
      >
        {survey.questions && survey.questions.length > 0 ? (
          survey.questions.map((q) => (
            <div key={q.id} style={{ marginBottom: 8 }}>
              <label>{q.text}</label>
              <br />
              <select onChange={(e) => handleChange(q.id, e.target.value)}>
                <option value="">-- choose --</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </div>
          ))
        ) : (
          <p>No questions (survey empty)</p>
        )}
        <button className="btn" type="submit">
          Submit Survey
        </button>
      </form>
    </div>
  );
}
