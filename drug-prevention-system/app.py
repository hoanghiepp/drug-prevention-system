from flask import Flask, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
import os

# ====== Flask backend setup ======
app = Flask(
    __name__,
    static_folder="../frontend/dist",      # đường dẫn build React
    template_folder="../frontend/dist"
)

# Cấu hình DB (tùy bạn)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///test.db"  # hoặc MSSQL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = "super-secret-key"

db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

# ====== API Flask ======
@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask API 🚀"})


# ====== React frontend (serve build) ======
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=6868, debug=True)
