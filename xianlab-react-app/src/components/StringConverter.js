import React, { useState } from 'react';

function StringConverter() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [activeFunction, setActiveFunction] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 处理输入变化
  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setError(null); // 清除之前的错误
  };

  // 调用后端API执行转换
  const performConversion = async (funcName) => {
    if (!inputText.trim()) {
      setError('请输入要转换的文本');
      return;
    }

    setActiveFunction(funcName);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/StringConverter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          operation: funcName,
        })
      });

      if (!response.ok) {
        throw new Error(`请求失败: ${response.status}`);
      }

      const data = await response.json();
      setOutputText(data.result || '无返回结果');
    } catch (err) {
      setError(`转换错误: ${err.message}`);
      console.error('API调用失败:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>字符串转换工具</h2>

      <div style={{ marginBottom: '20px' }}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="请输入要转换的文本..."
          style={{
            width: '100%',
            height: '100px',
            padding: '10px',
            fontSize: '16px'
          }}
        />
      </div>

      <div style={{display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap'}}>
        <button
            type="button"
            onClick={() => performConversion('removeSpaces')}
            style={buttonStyle}
            disabled={isLoading}
        >
          {isLoading && activeFunction === 'removeSpaces' ? '处理中...' : '去除空格'}
        </button>

        <button
            type="button"
            onClick={() => performConversion('hex_2_asc')}
            style={buttonStyle}
            disabled={isLoading}
        >
          {isLoading && activeFunction === 'hex_2_asc' ? '处理中...' : 'Hex转ASCII码'}
        </button>

        <button
            type="button"
            onClick={() => performConversion('asc_2_hex')}
            style={buttonStyle}
            disabled={isLoading}
        >
          {isLoading && activeFunction === 'asc_2_hex' ? '处理中...' : '字符串转Hex'}
        </button>

        <button
            type="button"
            onClick={() => performConversion('str_2_base64')}
            style={buttonStyle}
            disabled={isLoading}
        >
          {isLoading && activeFunction === 'str_2_base64' ? '处理中...' : '字符串→Base64加密'}
        </button>

        <button
            type="button"
            onClick={() => performConversion('base64_2_str')}
            style={buttonStyle}
            disabled={isLoading}
        >
          {isLoading && activeFunction === 'base64_2_str' ? '处理中...' : 'Base64解密→字符串'}
        </button>

        <button
            type="button"
            onClick={() => performConversion('gen_random_data')}
            style={buttonStyle}
            disabled={isLoading}
        >
          {isLoading && activeFunction === 'gen_random_data' ? '处理中...' : '生成输入长度的十六进制数(输出单位按字符数显示)'}
        </button>

      </div>

      {error && (
          <div style={{color: 'red', marginBottom: '15px'}}>
            {error}
          </div>
      )}

      <div>
        <h3>转换结果 ({activeFunction})</h3>
        <textarea
            value={outputText}
            readOnly
            style={{
              width: '100%',
            height: '100px',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f5f5f5'
          }}
        />
        {isLoading && <p>正在处理...</p>}
      </div>
    </div>
  );
}

// 按钮样式
const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
  flex: '1 0 auto',
  minWidth: '120px'
};

export default StringConverter;