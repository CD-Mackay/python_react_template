from flask import Flask

api = Flask(__name__)

## Sample route to access user info
@api.route('/profile') 
def my_profile():
    response_body = {
        "name": "Connoooor",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body

## Uses Pythons time module to pass the current time to the frontend
@api.route('/time')
def time():
    return {'time': time.time()}


if __name__ == "__main__":
      api.run(debug=True)