from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify({
        "users": [
            'Alice',
            'Bob',  
            'Charlie'
        ]
    })

if __name__ == '__main__':
    app.run(debug=True, port=8080)
