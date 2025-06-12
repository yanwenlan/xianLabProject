import React, { useState } from 'react';
import { Button } from '@mui/material';
// import Box from '@mui/material'
import { Box } from '@mui/material';
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';

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
      const response = await fetch('/StringConverter', {
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
      <TextField
            label="请输入要转换的文本..."
            value={inputText}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            style={{
            width: '100%',
            height: '100px',
            padding: '10px',
            fontSize: '16px'
          }}
        />

      {/*<Box color="text.primary" clone>*/}
      <Stack direction="column" spacing={2}>
      {/*<div style={{display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap'}}>*/}
        <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => performConversion('removeSpaces')}
            disabled={isLoading}
        >
          {isLoading && activeFunction === 'removeSpaces' ? '处理中...' : '去除空格'}
        </Button>

        <Button
            onClick={() => performConversion('hex_2_asc')}
            disabled={isLoading}
            variant="contained"
            color="primary"
        >
          {isLoading && activeFunction === 'hex_2_asc' ? '处理中...' : 'Hex转ASCII码'}
        </Button>

        <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => performConversion('asc_2_hex')}
            disabled={isLoading}
        >
          {isLoading && activeFunction === 'asc_2_hex' ? '处理中...' : '字符串转Hex'}
        </Button>

        <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => performConversion('str_2_base64')}
            disabled={isLoading}
        >
          {isLoading && activeFunction === 'str_2_base64' ? '处理中...' : '字符串→Base64加密'}
        </Button>

        <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => performConversion('base64_2_str')}
            disabled={isLoading}
        >
          {isLoading && activeFunction === 'base64_2_str' ? '处理中...' : 'Base64解密→字符串'}
        </Button>

        <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => performConversion('gen_random_data')}
            disabled={isLoading}
        >
          {isLoading && activeFunction === 'gen_random_data' ? '处理中...' : '生成输入长度的十六进制数(输出单位按字符数显示)'}
        </Button>

      {/*</div>*/}
      {/*</Box>*/}
      </Stack>


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


export default StringConverter;