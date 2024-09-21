from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

import logging

import sys
import os

db = SQLAlchemy()

def create_app():
    from .models import User

    _app = Flask(__name__)

    _app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
    if not _app.config["SECRET_KEY"]:
        _app.logger.error("Could not start without secret key")
        sys.exit(1)
    _app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite" # SQL_LINK

    db.init_app(_app)

    with _app.app_context():
        db.create_all()

    login_manager = LoginManager()
    login_manager.login_view = "auth.login"
    login_manager.login_message = "Please login before accessing this ressource"
    login_manager.login_message_category = "danger"
    login_manager.init_app(_app)

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    from .auth import auth as auth_blueprint
    _app.register_blueprint(auth_blueprint)

    from .main import main as main_blueprint
    _app.register_blueprint(main_blueprint)

    return _app
