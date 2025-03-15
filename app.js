async function loadModel() {
    const model = await tf.loadLayersModel('http://localhost:8000/model.json');
    console.log("Model loaded successfully.");
    return model;
}

async function setupWebcam() {
    const video = document.getElementById('webcam');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        return new Promise((resolve) => {
            video.onloadedmetadata = () => {
                resolve(video);
            };
        });
    } catch (error) {
        console.error('Error accessing webcam:', error);
        alert('Unable to access webcam. Please ensure your webcam is connected and permissions are granted.');
        throw error;
    }
}

async function runLightingClassification() {
    const model = await loadModel();
    const video = await setupWebcam();

    const lightingStatus = document.getElementById('lighting-status');

    async function predictLighting() {
        const image = tf.browser.fromPixels(video);
        const resizedImage = tf.image.resizeBilinear(image, [150, 150]); // Resize to 150x150
        const normalizedImage = resizedImage.div(255.0); // Normalize pixel values
        const batchedImage = normalizedImage.expandDims(0); // Add batch dimension

        const predictions = await model.predict(batchedImage);
        const predictedClass = predictions.argMax(1).dataSync()[0]; // Get the predicted class

        // Map the predicted class to lighting conditions
        lightingStatus.innerText = predictedClass === 0 ? 'Low Light' : predictedClass === 1 ? 'Medium Light' : 'High Light';

        requestAnimationFrame(predictLighting);
    }

    predictLighting();
}

runLightingClassification();
