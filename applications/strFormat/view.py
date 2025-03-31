from flask import Blueprint

bp = Blueprint('view', __name__)


@bp.route('/strFormat', methods=['GET', 'POST'])
def index():
    return 'Hello World!'
