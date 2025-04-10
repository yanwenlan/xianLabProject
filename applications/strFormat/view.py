from flask import Blueprint, render_template, request, jsonify
from applications.strFormat.utils import *

bp = Blueprint('strFormat', __name__, template_folder='templates')


@bp.route('/strFormat', methods=['GET'])
def strFormat():
    data = {
        "data": "success",
        "code": 200
    }
    return render_template('strFormat.html')


@bp.route('/strFormat', methods=['POST'])
def strFormatAction():
    data = request.get_json()
    origin_text = data.get('origin_text', '')
    action = request.args.get('action')

    # 简单示例：根据 action 返回不同格式处理
    if action == 'removeSpaces':
        result = origin_text.replace(" ", "")
    elif action == 'hex_2_asc':
        try:
            result = bytes.fromhex(origin_text).decode('utf-8')
        except:
            result = "hex转ascii失败"
    elif action == 'str_2_hex':
        result = origin_text.encode().hex()
    elif action == 'str_2_base64':
        import base64
        result = base64.b64encode(origin_text.encode()).decode()
    elif action == 'base64_2_str':
        import base64
        try:
            result = base64.b64decode(origin_text).decode()
        except:
            result = "base64解码失败"
    else:
        result = "未知操作"

    return jsonify({'result': result})


# @bp.route('/removeSpaces', methods=['POST'])
# def removeSpaces():
#     action = request.form.get('action')
#     data = request.form.get('data')
#     print(request.form.values())
#     print(action)
#     print(data)
#     res = {
#         "msg": "success",
#         "action": action,
#         "data": data
#     }
#     return jsonify(res)


@bp.route('/hex_2_asc', methods=['POST'])
def hex_2_asc():
    action = request.form.get('action')
    data = request.form.get('data')
    print(action)
    print(data)
    res = {
        "msg": "success",
        "action": action,
        "data": data
    }
