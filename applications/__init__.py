import os
from flask import Flask
from flask import render_template

from applications.strFormat.view import bp as strFormat_bp
from applications.index.view import bp as index_bp
from flask_cors import CORS


def create_app():
    # app = Flask(__name__, template_folder='templates')
    app = Flask(
        __name__,
        # template_folder=os.path.abspath('templates'),
        template_folder="../xianlab-react-app/build",
        static_folder="../xianlab-react-app/build/static"
    )
    app.register_blueprint(index_bp)
    app.register_blueprint(strFormat_bp)
    CORS(app)
    return app
