# 使用PyCharm
   1. 配置好环境变量
   2. 如果前端代码有更改，需要在`xianlab-react-app/`目录执行`npm run build`   
   3. 点击右上角的启动按钮

# 初次部署环境需要做的事情
#### 准备react环境
1. cd xianlab-react-app/
2. 安装element-react
   - `npm install @mui/material @emotion/react @emotion/styled`
   - `npm install @mui/icons-material`
   - 安装过程可能还会报错，根据提示安装缺少的包，然后继续
3. npm run build
4. cd ..

#### 启动flask
1. 进入虚拟环境(如果存在flask虚拟环境的话)
2. 安装requirements.txt中的库 `pip install -r requirements.txt`
3. python app.py (测试启动)
4. gunicorn -w 4 -b 0.0.0.0:5000 app:app &  (gunicorn启动)
5. gunicorn -w 4 -b 127.0.0.1:5000 app:app &  (gunicorn启动，然后使用nginx代理)


#### FAQ
导出pip库 `pip freeze > requirements.txt`
