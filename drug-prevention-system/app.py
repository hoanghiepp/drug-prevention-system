from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from api import db, migrate  # lấy db, migrate từ api/__init__.py
from api.routes.auth_routes import auth_bp
from config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # JWT
    app.config['JWT_SECRET_KEY'] = 'your-super-secret-key'  # nên lưu trong biến môi trường
    jwt = JWTManager(app)

    # Init DB + migrate
    db.init_app(app)
    migrate.init_app(app, db)

    # Register blueprint
    app.register_blueprint(auth_bp, url_prefix="/api/v1/auth")

    @app.route("/")
    def home():
        return "<h1>Flask API is running 🚀</h1>"
    
    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=6868, debug=True)
