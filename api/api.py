import time
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

@app.route('/api/time')
@cross_origin()
def get_current_time():
    return {'time': time.time()}

@app.route('/')
@cross_origin()
def index():
    return app.send_static_file('index.html')