# Teachable Machine - Image Classification

This project is part of my college course IS201. It involves a classification images AI trained using Teachable Machine. The project is hosted on GitHub Pages and can be accessed [here](https://naserowaimer.github.io/teachablemachine/).

## Description

This project utilizes Google's [Teachable Machine](https://teachablemachine.withgoogle.com/) to train an AI model for image classification. The model is trained on a dataset consisting of images of bikes, cars, and airplanes. The training process involved selecting about 100 images for each class from the provided datasets. Access teachable machine page for the model [here](https://teachablemachine.withgoogle.com/models/cx3R3CUXZ/).

## Usage

To use the image classification model, visit the [project page](https://naserowaimer.github.io/teachablemachine/). Follow the instructions on the page to upload an image and get the classification result.

### Sample Usage

1. Open the [project page](https://naserowaimer.github.io/teachablemachine/).
2. Click on the "Upload Image" button.
3. Select an image from your device.
4. The model will classify the image and display the result.

## Using the Model in Your Projects

You can use the trained model in your own projects by following these steps. There are two options for implementing the model URL: online access and locally hosted.

### Online Access

To use the model online without downloading the files, follow these steps:

1. **Include Required Scripts**: Add the TensorFlow.js and Teachable Machine scripts to your HTML file.

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8.3/dist/teachablemachine-image.min.js"></script>
```

2. **Load and Use the Model**: Use the following JavaScript code to load and use the model directly from the provided URL.

```javascript
// Load the model
async function loadModel() {
    const modelURL = 'https://teachablemachine.withgoogle.com/models/cx3R3CUXZ/model.json';
    const metadataURL = 'https://teachablemachine.withgoogle.com/models/cx3R3CUXZ/metadata.json';
    const model = await tmImage.load(modelURL, metadataURL);
    return model;
}

// Use the model to classify an image
async function classifyImage(imageElement) {
    const model = await loadModel();
    const prediction = await model.predict(imageElement);
    console.log(prediction);
}

// Example usage
const imageElement = document.getElementById('your-image-element-id');
classifyImage(imageElement);
```

### Locally Hosted

To use the model locally, follow these steps:

1. **Download the Model Files**: Download the `metadata.json`, `model.json`, and `weights.bin` files from the repository.
2. **Include the Model Files in Your Project**: Place the downloaded files in a directory within your project.
3. **Include Required Scripts**: Add the TensorFlow.js and Teachable Machine scripts to your HTML file.

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8.3/dist/teachablemachine-image.min.js"></script>
```

4. **Load and Use the Model**: Use the following JavaScript code to load and use the model from the local files.

```javascript
// Load the model
async function loadModel() {
    const modelURL = 'path/to/model.json';
    const metadataURL = 'path/to/metadata.json';
    const model = await tmImage.load(modelURL, metadataURL);
    return model;
}

// Use the model to classify an image
async function classifyImage(imageElement) {
    const model = await loadModel();
    const prediction = await model.predict(imageElement);
    console.log(prediction);
}

// Example usage
const imageElement = document.getElementById('your-image-element-id');
classifyImage(imageElement);
```
By following these steps, you can integrate the trained model into your own web projects and use it to classify images. You can check `docs/` directory in this repo to see the full code used in [project page](https://naserowaimer.github.io/teachablemachine/).

## Credits

- **Bikes and Cars image sets**: [Kaggle Dataset](https://www.kaggle.com/datasets/pavansanagapati/images-dataset?resource=download)
- **Airplanes images set**: [Kaggle Dataset](https://www.kaggle.com/datasets/nelyg8002000/commercial-aircraft-dataset?select=1_Liner+TF)

## References

- This project is based on the Teachable Machine community project by Google. You can find the base repository [here](https://github.com/googlecreativelab/teachablemachine-community).