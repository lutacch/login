"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


# Setup the Flask-JWT-Extended extension



@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():
    dictionary= {
        "message": "This is your private page, for users only"
    }
    return jsonify(dictionary)


@api.route("/signup", methods=["POST"])
def create_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email == "" or password == "":
        return jsonify({"msg": "Empty user"}), 401

    access_token = create_access_token(identity=email)
    user = User(email=email, password =password)
    return jsonify(user.serialize()) 



@api.route("/signup2", methods=["POST"])
def signUp2():
    body = request.get_json()
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    access_token = create_access_token(identity=email)
    signup = User(email=body["email"], password=body["password"])
    db.session.add(signup)
    db.session.commit()
    
    return jsonify({"mensaje": "User registered succesfully", "token": access_token}),200