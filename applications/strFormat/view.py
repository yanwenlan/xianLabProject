import random

from flask import Blueprint, render_template, request, jsonify
from applications.strFormat.utils import *
import re

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


@bp.route('/StringConverter', methods=['GET', 'POST'])
def convert():
    hex_chars = '0123456789abcdef'
    data = request.get_json()
    text = data.get('text', '')
    operation = data.get('operation', '')
    print(data)
    try:
        if operation == 'removeSpaces':
            result = text.replace(' ', '')
        elif operation == 'hex_2_asc':
            result = hex_to_ascii(text)
        elif operation == 'asc_2_hex':
            result = ascii_to_hex(text)
        elif operation == 'str_2_base64':
            result = base64.b64encode(text.encode('utf-8')).decode('utf-8')
        elif operation == 'base64_2_str':
            result = base64.b64decode(text).decode('utf-8')
        elif operation == 'gen_random_data':
            result = "".join(random.choice(hex_chars) for _ in range(int(text)))
        else:
            return jsonify({'error': '未知操作类型'}), 400
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


def hex_to_ascii(hex_str):
    # 移除所有空格和非十六进制字符
    hex_str = re.sub(r'[^0-9a-fA-F]', '', hex_str)
    if len(hex_str) % 2 != 0:
        raise ValueError("十六进制字符串长度必须为偶数")
    bytes_obj = bytes.fromhex(hex_str)
    return bytes_obj.decode('utf-8', errors='replace')


def ascii_to_hex(ascii_str):
    return ' '.join(f'{ord(c):02x}' for c in ascii_str)
