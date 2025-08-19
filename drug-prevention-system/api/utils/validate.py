import re

def validate_user_update(data):
    errors = []

    if "username" in data:
        if not data["username"] or len(data["username"]) < 3:
            errors.append("Username must be at least 3 characters long.")

    if "email" in data:
        email_pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        if not re.match(email_pattern, data["email"]):
            errors.append("Invalid email format.")

    return errors