from flask import Flask, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
import os

# ====== Flask backend setup ======
app = Flask(
    __name__,
    static_folder="../frontend/dist",      # build React vào đây
    template_folder="../frontend/dist"
)

# Config DB (tùy bạn)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///test.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = "super-secret-key"

db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)


# ====== API Flask (tất cả dưới /api/*) ======
@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask API 🚀"})


# ====== Serve React build ======
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    # Nếu request bắt đầu bằng "api/" thì không để React xử lý
    if path.startswith("api/"):
        return jsonify({"error": "API endpoint not found"}), 404

    full_path = os.path.join(app.static_folder, path)
    if path != "" and os.path.exists(full_path):
        return send_from_directory(app.static_folder, path)

    # Fallback: React Router handle
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=6868, debug=True)
