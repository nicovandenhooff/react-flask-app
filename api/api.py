import time
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

# simple function
@app.route("/api/time")
@cross_origin()
def get_current_time():
    return {"time": time.time()}
