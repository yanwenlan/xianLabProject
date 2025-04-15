## 准备react环境
1. cd xianlab-react-app/
2. npm run build
3. cd ..

## 启动flask
1. 进入虚拟环境(如果存在flask虚拟环境的话)
2. 安装requirements.txt中的库 `pip install -r requirements.txt`
3. python app.py (测试启动)
4. gunicorn -w 4 -b 0.0.0.0:5000 app:app &  (gunicorn启动)


## 辅助步骤
导出pip库 `pip freeze > requirements.txt`
