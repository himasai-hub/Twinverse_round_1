Here's your final README with instructions on how to run the project while removing unnecessary code. This keeps it clean and professional.

Twinverse Interview Project: Room Brightness Classification

Overview

This project classifies the brightness level of a room in real-time using a trained deep learning model. The classification is based on three categories:

Well-lit (high brightness)
Normal (medium brightness)
No-light (low brightness)
The model was trained using an image dataset from Kaggle and fine-tuned using images classified based on brightness thresholds. The trained model was saved in H5 format, converted to TensorFlow.js, and deployed in a web-based real-time classification system.

Project Workflow

Dataset Preparation
The dataset was categorized into Well-lit, Normal, and No-light based on brightness.
Images were resized and preprocessed for training.
Model Training
A Convolutional Neural Network (CNN) was trained using TensorFlow/Keras.
The trained model was saved as an H5 file.
Model Conversion
The H5 model was converted into a TensorFlow.js model for deployment.
Web-Based Deployment
The Flask backend serves the web application.
The TensorFlow.js model is loaded in JavaScript.
The model processes the webcam feed and classifies brightness in real-time.
How to Run the Project

1️⃣ Install Dependencies
Make sure you have Python installed, then install the required packages:

pip install tensorflow tensorflowjs flask opencv-python numpy
2️⃣ Train the Model (Optional)
If you want to retrain the model:

python train_model.py
This will save the trained model as light_classification_model.h5 in the models/ folder.

3️⃣ Convert the Model to TensorFlow.js
If retraining is done, convert the model to TensorFlow.js:

tensorflowjs_converter --input_format=keras models/light_classification_model.h5 models/tfjs_model
4️⃣ Start the Flask Web Server
Run the Flask app:

python app.py
This will start the web server at http://127.0.0.1:5000/.

5️⃣ Start the Local HTTP Server for TensorFlow.js
In the project directory, run:

python -m http.server 8000
This serves static files (including model.json) required by TensorFlow.js.

6️⃣ Open the Web App
Go to:

http://127.0.0.1:5000/
This will display the webcam feed and classify lighting conditions in real-time.

Project Files

File/Folder	Description
Classify.ipynb	Script for training the CNN model.
models/	Folder containing the trained model (H5 & TensorFlow.js).
static/app.js	JavaScript for running TensorFlow.js model in the browser.
templates/index.html	Webpage displaying the classification results.
Results

The model successfully classifies real-time video feeds into Well-lit, Normal, and No-light conditions.
See attached screenshots for results.

But eventhough after I week of working on this I could't possibilily figure out the error while loading tensor packets and this error as affected while hosting in the web,but we should try with some other means of hosting it 


"🌲 Try https://ydf.readthedocs.io, the successor of TensorFlow Decision Forests with more features and faster training!
failed to lookup keras version from the file,"

Note:I am not familiar with java script so the code has been done with the help of ChatGPT,