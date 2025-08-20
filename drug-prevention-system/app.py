from flask import Flask, jsonify
from api.routes.auth_routes import auth_bp
from flasgger import Swagger
from flask_swagger_ui import get_swaggerui_blueprint
from infrastructure.databases import init_db # Giả định tồn tại
from api.middleware import middleware # Giả định tồn tại

def create_app():
    app = Flask(__name__)
    
    # Cấu hình SECRET_KEY cho mã hóa token
    app.config['SECRET_KEY'] = 'your-very-secret-key-for-token-signing'

    # Khởi tạo Swagger
    Swagger(app)

    # Đăng ký blueprint
    app.register_blueprint(auth_bp)

    # Thêm Swagger UI blueprint
    SWAGGER_URL = '/docs'
    API_URL = '/swagger.json'
    swaggerui_blueprint = get_swaggerui_blueprint(
        SWAGGER_URL,
        API_URL,
        config={'app_name': "Drug Prevention Support System API"}
    )
    app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)
    
    # Try-except block for database initialization
    try:
        init_db(app)
    except Exception as e:
        print(f"Error initializing database: {e}")

    # Register middleware
    middleware(app)

    # Route cho Swagger JSON
    @app.route("/swagger.json")
    def swagger_json():
        # Trả về một spec đơn giản để đảm bảo Swagger hoạt động
        return jsonify({
            "swagger": "2.0",
            "info": {
                "title": "Drug Prevention Support System API",
                "version": "1.0.0"
            },
            "paths": {
                "/api/v1/auth/register": {
                    "post": {
                        "summary": "Đăng ký người dùng mới",
                        "consumes": ["application/json"],
                        "produces": ["application/json"],
                        "parameters": [{
                            "name": "body",
                            "in": "body",
                            "required": True,
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "username": {"type": "string"},
                                    "email": {"type": "string"},
                                    "password": {"type": "string"}
                                }
                            }
                        }],
                        "responses": {
                            "201": {"description": "Đăng ký thành công"},
                            "400": {"description": "Lỗi yêu cầu"},
                            "409": {"description": "Người dùng đã tồn tại"}
                        }
                    }
                },
                "/api/v1/auth/login": {
                    "post": {
                        "summary": "Đăng nhập người dùng",
                        "consumes": ["application/json"],
                        "produces": ["application/json"],
                        "parameters": [{
                            "name": "body",
                            "in": "body",
                            "required": True,
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "email": {"type": "string"},
                                    "password": {"type": "string"}
                                }
                            }
                        }],
                        "responses": {
                            "200": {"description": "Đăng nhập thành công, trả về token"},
                            "401": {"description": "Sai email hoặc mật khẩu"}
                        }
                    }
                }
            }
        })
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=6868, debug=True)
