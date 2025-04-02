from flask import Blueprint, render_template, jsonify, request


bp = Blueprint('index', __name__, template_folder='templates')


@bp.route('/')
def hello_world():  # put application's code here
    # return 'Hello World!'
    return render_template('index.html')


@bp.route('/test')
def test():
    data = {
        "data": "success",
        "code": 200
    }
    return jsonify(data)
