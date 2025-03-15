from flask import Flask, render_template, Response
import cv2

app = Flask(__name__)

def generate_frames():
    """Captures video frames and streams them to the web interface."""
    cap = cv2.VideoCapture(0)  # Access webcam

    while True:
        success, frame = cap.read()
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame_bytes = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

    cap.release()

@app.route('/video_feed')
def video_feed():
    """Route to stream the live webcam feed."""
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/')
def index():
    """Main page displaying the webcam feed."""
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
