const URL = 'https://teachablemachine.withgoogle.com/models/cx3R3CUXZ/';

let model, labelContainer, maxPredictions;

async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    // Load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Set up the label container
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement('div'));
    }
}

async function predict(imageElement) {
    // Run the image through the model
    const prediction = await model.predict(imageElement, false);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}

document.getElementById('upload-image').addEventListener('change', event => {
    const image = event.target.files[0];
    if (image) {
        const imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(image);
        imgElement.onload = () => {
            predict(imgElement);
            // Revoke the object URL after the image is loaded
            URL.revokeObjectURL(imgElement.src);
        };
    }
});

init();