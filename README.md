## 📂 Project Structure

```bash
drug-prevention-system/
│── api/
│   ├── models/                # Database models
│   │   ├── consultation.py
│   │   ├── course.py
│   │   ├── survey.py
│   │   ├── user.py
│   │   └── __pycache__/       # Compiled Python cache
│   │
│   ├── routes/                # API endpoints (Blueprints)
│   │   ├── auth_routes.py
│   │   ├── consultant_routes.py
│   │   ├── course_routes.py
│   │   ├── survey_routes.py
│   │   ├── user_routes.py
│   │   └── __pycache__/
│   │
│   ├── services/              # Business logic (future use)
│   ├── utils/                 # Helper functions
│   │   └── __init__.py
│   └── __init__.py            # Init DB & Migrate
│
│── infrastructure/            # Infra setup (if needed later)
│── migrations/                # Alembic migrations
│── venv/                      # Virtual environment
│
│── app.py                     # Application entrypoint
│── config.py                  # Configurations
│── requirements.txt           # Dependencies
│── README.md                  # Documentation
```
