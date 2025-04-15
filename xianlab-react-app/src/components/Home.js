import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>多功能工具集</h1>
      <div className="tool-buttons">
        <button
          onClick={() => navigate('/StringConverter')}
          className="tool-button"
        >
          字符串转换工具
        </button>

        {/* 可以添加更多工具按钮 */}
        <button className="tool-button">
          其他工具1 (待实现)
        </button>

        <button className="tool-button">
          其他工具2 (待实现)
        </button>
      </div>
    </div>
  );
}

export default Home;