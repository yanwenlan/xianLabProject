from flask import Blueprint, render_template, request, jsonify
from utils import *

bp = Blueprint('strFormat', __name__, template_folder='templates')


@bp.route('/strFormat', methods=['GET'])
def strFormat():
    data = {
        "data": "success",
        "code": 200
    }
    return render_template('strFormat.html')


@bp.route('/strFormat', methods=['POST'])
def strFormat1():
    action = request.form.get('action')
    data = request.form.get('data')
    print(action)
    print(data)


@bp.route('/removeSpaces', methods=['POST'])
def removeSpaces():
    action = request.form.get('action')
    data = request.form.get('data')
    print(action)
    print(data)
    return jsonify(data)
