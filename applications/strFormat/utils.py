import base64
import random


def halRemoveSpaces(inStr) -> str:
    res = ""
    for i in inStr:
        if i != " ":
            res += i
    return res


def hal_hex_2_asc(inStr) -> str:
    bytes_out = bytes.fromhex(inStr)
    # print("to_hex:", bytes_out)
    return bytes_out


def hal_asc_2_hex(inStr) -> str:
    bytes_out = bytes.hex(inStr.encode())
    # print("to_str:", bytes_out)
    return bytes_out


def hal_hex_2_base64(inStr) -> str:
    bytes_out = bytes.fromhex(inStr)
    str_out = base64.b64encode(bytes_out)
    # print("hex_to_base64:", str_out)
    return str_out.decode()


def hal_base64_2_str(inStr) -> str:
    """
    # 的结果是一个 字节串（bytes 类型），也就是 ASCII 字节序列，不是直接的 hex，也不是字符串。
    b'#E#E'	字节串（bytes）
    data.decode()	转成字符串 #E#E
    data.hex()	转成十六进制字符串 23452345
    :param inStr:
    :return: 字符串
    """
    str_in = base64.b64decode(inStr)
    return str_in


if __name__ == '__main__':
    hex_chars_0 = '0123456789abcdef'
    result1 = "".join(random.choice(hex_chars_0) for _ in range(10))
    # print(result1)
    # print(type(result1))
    # a = "ac 1f 09 ff fe 07 b1"
    # print(halRemoveSpaces(a))
    # b = "0840FF"
    # print(hal_hex_2_asc(b))
    # print(hal_hex_2_base64(b))
    c = "IAgYuiYw1x5diTioSmE2LsgPzgJ/yEptYYyQmzgTRq5W"
    d = hal_base64_2_str(c)
    print(d)
    # print(hal_asc_2_hex(d))
