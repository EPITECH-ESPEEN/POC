from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_required, current_user
from requests import get
from .models import User

from . import db

main = Blueprint("main", __name__)

@main.route("/")
def index():
    return render_template("index.html")

@main.route("/profile")
@login_required
def profile():
    json = get(f"https://api.nasa.gov/planetary/apod?api_key={current_user.nasa_token}").json()
    return render_template("profile.html", apod_url=json.get("hdurl"), apod_title=json.get("title"), apod_data=json.get("explanation"))

@main.route("/register_api", methods=["POST"])
@login_required
def register_api():
    key = request.form.get('key')
    user = User.query.filter_by(nasa_token=key).first()

    if user:
        flash("This API Key is already used !", "danger")
        return redirect(url_for("main.profile"))

    if get(f"https://api.nasa.gov/planetary/apod?api_key={key}").status_code != 200:
        flash("API Key did not work !", "danger")
        return redirect(url_for("main.profile"))

    current_user.nasa_token = key
    db.session.commit()

    flash("API key registered !", "primary")
    return redirect(url_for("main.profile"))
