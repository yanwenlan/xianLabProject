import os
from flask import Flask
from flask import render_template

from applications.strFormat.view import bp as strFormat_bp
from applications.index.view import bp as index_bp


def create_app():
    # app = Flask(__name__, template_folder='templates')
    app = Flask(__name__,  template_folder=os.path.abspath('templates'))
    app.register_blueprint(index_bp)
    app.register_blueprint(strFormat_bp)

    return app


