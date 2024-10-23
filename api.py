from flask import Flask, send_file
from os import listdir
app=Flask(__name__)
@app.route("/gallery")
def return_image():
    imageName=request.get_json()["image"]
    imageFile="./images/"+imageName
    images=listdir("./images")
    if(imageName not in images)return "ERROR"
    return send_file(imageFile)
    