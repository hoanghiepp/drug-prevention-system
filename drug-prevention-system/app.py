from flask import Flask, jsonify
from flask_jwt_extended import JWTManager
from infrastructure.databases import init_db
from api.routes.auth_routes import auth_bp
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Khởi tạo và cấu hình JWT
    app.config['JWT_SECRET_KEY'] = 'your-super-secret-key' # Thay bằng secret key thật
    jwt = JWTManager(app)

    # Đăng ký blueprint
    app.register_blueprint(auth_bp, url_prefix='/api/v1/auth')

    try:
        init_db(app)
    except Exception as e:
        print(f"Lỗi khi khởi tạo database: {e}")

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=6868, debug=True)
